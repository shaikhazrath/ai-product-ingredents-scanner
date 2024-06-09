'use client';
import React, { useState } from 'react';
import ChartComponent from '@/components/ChartComponent';
import { GoogleGenerativeAI } from '@google/generative-ai';
import CameraComponent from '@/components/CameraComponent';
import { FaCamera } from "react-icons/fa6";
import { TbFaceIdError } from "react-icons/tb";
import IngredientDropdown from '@/components/IngredientDropdown ';
import WarningDisclaimer from '@/components/WarningDisclaimer';
import LoadingScreen from '@/components/LoadingScreen';

const Page = () => {
  const [ingredients, setIngredients] = useState(null);
  const [error, setError] = useState(null);
  const [good, setGood] = useState([]);
  const [bad, setBad] = useState([]);
  const [neutral, setNeutral] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (image, productType, usageFrequency) => {
    if (!image) {
      console.log('No image selected');
      return;
    }
    setLoading(true);
    setError(null);
    setIngredients(null);

    try {
      const imageBuffer = await image.arrayBuffer();
      const imageBase64 = Buffer.from(imageBuffer).toString('base64');

      const api_key = process.env.NEXT_PUBLIC_GEMINI_API;
      const googleAI = new GoogleGenerativeAI(api_key);
      const geminiConfig = {
        temperature: 0.4,
        topP: 1,
        topK: 32,
        maxOutputTokens: 4096,
      };

      const geminiModel = googleAI.getGenerativeModel({
        model: 'gemini-pro-vision',
        geminiConfig,
      });

      const promptConfig = [
        {
          "text": `Analyze the provided product image to determine if it is a food or cosmetic product. If it is neither, respond with {error: 'Please provide product ingredients'}. If valid, list all ingredients and categorize each as good, bad, or neutral according to the European Chemicals Agency (ECHA) and the European Food Safety Authority (EFSA). For any restricted or prohibited ingredients, provide a brief description of its usage frequency, and its effects or benefits when used ${usageFrequency}. The response should be a JSON object in the following format: {ingredients: [{name: ingredient_name, status: 'good/bad/neutral', description: 'short description', daily_effects: 'effects of using daily', weekly_effects: 'effects of using 1-3 times weekly'}]}.`
        },

        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageBase64,
          },
        },
      ];

      const result = await geminiModel.generateContent({
        contents: [{
          role: 'user', parts: promptConfig
        }],
      });

      const responseText = result.response.text();
      const parsedResponse = JSON.parse(responseText);

      if (parsedResponse.error) {
        setError(parsedResponse.error);
      } else {
        const ingredients = parsedResponse.ingredients;
        setIngredients(ingredients);
        const goodIngredients = ingredients.filter(ingredient => ingredient.status === 'good');
        const badIngredients = ingredients.filter(ingredient => ingredient.status === 'bad');
        const neutralIngredients = ingredients.filter(ingredient => ingredient.status === 'neutral');
        setGood(goodIngredients);
        setBad(badIngredients);
        setNeutral(neutralIngredients);
      }
    } catch (error) {
      setError('Error processing the image please provide a clear image please try again');
      console.error('Error processing the image please provide a clear image of product', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className='bg-black text-white p-4 min-h-screen'>
      <div className="p-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-white ">SnapPure</h1>
        {ingredients &&
          <label className='rounded-xl px-2 py-1 font-semibold text-white border-green-900 border-2 bg-gradient-to-r from-[#4bae00] to-[#b1ffaa] hover:bg-gradient-to-r hover:from-[#b1ffaa] hover:to-[#4bae00] shadow-md transition duration-300 flex gap-1 justify-center items-center'>
            <FaCamera color='black' /> <h1 className='text-black'>Scan New</h1>
            <button
              onClick={() => setIngredients(null)}
            />
          </label>
        }


      </div>
      {ingredients ? (
        <div className=" md:flex ">
          <div className='md:w-1/2'>
            {ingredients ? (
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium text-gray-400">View:</span>
                <div className="flex space-x-1">
                  <button className="px-2 py-1 rounded-full bg-green-600 text-white text-xs font-medium">
                    Good
                  </button>
                  <button className="px-2 py-1 rounded-full bg-yellow-600 text-white text-xs font-medium">
                    Neutral
                  </button>
                  <button className="px-2 py-1 rounded-full bg-red-600 text-white text-xs font-medium">
                    Bad
                  </button>
                </div>
              </div>
            ) : null}
            <ChartComponent good={good} bad={bad} neutral={neutral} />
          </div>
          <div className='md:w-1/2 '>
            {ingredients.map((data, index) => (
              <div className='m-2'>
                <IngredientDropdown key={index} data={data} />
              </div>

            ))}
            <WarningDisclaimer />
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center">
          {error && (
            <div className="bg-red-800 border border-red-600 text-white px-4 py-3 rounded mb-1 w-full">
              <div className="flex items-center">
                <TbFaceIdError className="mr-2" size={40} />
                <span className=' text-sm'>{error}</span>
              </div>
            </div>
          )}
          <CameraComponent handleSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default Page;
