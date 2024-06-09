import React, { useState } from 'react';
import { FaCamera } from "react-icons/fa6";

const CameraComponent = ({ handleSubmit }) => {
    const [image, setImage] = useState(null);
    const [productType, setProductType] = useState(null);
    const [imagePreview, setImagePreview] = useState();
  const [usageFrequency, setUsageFrequency] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProductTypeChange = (type) => {
        setProductType(type);
    };
    const handleUsageFrequencyChange = (frequency) => {
        setUsageFrequency(frequency);
    };
    return (
        <div className='flex flex-col gap-8 md:flex-row md:justify-center h-screen'>
            <div className='flex pt-2 flex-col gap-2 items-center'>
                {image ? (
                    <img
                        src={imagePreview}
                        alt="Selected"
                        className='w-max h-64 md:h-80 rounded-lg'
                    />
                ) : (
                    <img
                        src='demo.jpeg'
                        alt="Selected"
                        className='w-max h-64 md:h-80 rounded-lg'
                    />
                )}
                <div className='flex flex-col items-center'>
                    <label className='rounded-xl p-3 font-semibold text-white border-green-900 border-2 bg-gradient-to-r from-[#4bae00] to-[#b1ffaa] hover:bg-gradient-to-r hover:from-[#b1ffaa] hover:to-[#4bae00] shadow-md transition duration-300 flex gap-1 justify-center items-center'>
                        <FaCamera color='black' /> <h1 className='text-black'>Take Image</h1>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            required
                        />
                    </label>
                </div>
            </div>
            

          




            <div className='flex gap-10 flex-col'>
            { image && (
                <div className=''>
                    <h1 className='text-white font-bold pb-4'>Select type of product</h1>
                    <button
                        disabled={!image}
                        onClick={() => handleProductTypeChange('cosmetics')}
                    >
                        <div
                            className={`h-28 w-28 text-black ${productType === 'cosmetics' ? 'bg-gradient-to-r from-[#4bae00] to-[#b1ffaa]' : 'bg-gray-300'} border-2 border-gray-300 rounded-md font-bold text-sm mx-5 flex flex-col justify-around items-center`}
                        >
                            <img src="cosmeticsicon.png" alt="" className='h-16 w-16' />
                            <h1>cosmetics</h1>
                        </div>
                    </button>
                    <button
                        disabled={!image}

                        onClick={() => handleProductTypeChange('food')}
                    >
                        <div
                            className={`h-28 w-28 text-black ${productType === 'food' ? 'bg-gradient-to-r from-[#4bae00] to-[#b1ffaa]' : 'bg-gray-300'} border-2 border-gray-300 rounded-md font-bold text-sm mx-5 flex flex-col justify-around items-center`}
                        >
                            <img src="foodproducticon.png" alt="" className='h-16 w-16' />
                            <h1>Food</h1>
                        </div>
                    </button>
                </div>
            )}
                {productType && image && (
                <div className=''>
                    <h1 className='text-white font-bold pb-3'>How often do you use this product?</h1>
                  
                    <button
                        disabled={!productType}
                        onClick={() => handleUsageFrequencyChange('daily')}
                    >
                        <div
                            className={`h-10 w-max px-4 text-black ${usageFrequency === 'daily' ? 'bg-gradient-to-r from-[#4bae00] to-[#b1ffaa]' : 'bg-gray-300'} border-2 border-gray-300 rounded-md font-bold text-sm mx-5 flex flex-col justify-around items-center`}
                        >
                            <h1>Daily</h1>
                        </div>
                    </button>
                    <button
                        disabled={!productType}
                        onClick={() => handleUsageFrequencyChange('weekly_1_3')}
                    >
                        <div
                            className={`h-10 w-max px-4 text-black ${usageFrequency === 'weekly_1_3' ? 'bg-gradient-to-r from-[#4bae00] to-[#b1ffaa]' : 'bg-gray-300'} border-2 border-gray-300 rounded-md font-bold text-sm mx-5 flex flex-col justify-around items-center`}
                        >
                            <h1>Weekly 1-3 times</h1>
                        </div>
                    </button>
                </div>
                )}
                {productType && image && usageFrequency && (
                    <button
                        onClick={() => handleSubmit(image, productType, usageFrequency)}
                        className={`py-2 rounded-md m-2 font-semibold text-black w-full h-max md:w-max md:px-10 border-2 shadow-md transition duration-300 flex gap-1 justify-center items-center border-green-900 bg-gradient-to-r from-[#4bae00] to-[#b1ffaa] hover:bg-gradient-to-r hover:from-[#b1ffaa] hover:to-[#4bae00]`}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default CameraComponent;
