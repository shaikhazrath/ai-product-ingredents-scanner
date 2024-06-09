"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import CustomCarousel from "@/components/Carousel";
import { motion } from "framer-motion";
import axios from "axios"; // Make sure to import axios

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = ["hero1.svg", "hero3.svg", "hero2.jpg"];

  useEffect(() => {
    const chechAuth = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/user/checkauth`, {
          headers: {
            authorization: token,
          },
        });
        setAuthenticated(true);
      } catch (error) {
        console.log(error);
        setAuthenticated(false);
      }
    };
    chechAuth();
  }, []);

  useEffect(() => {
    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
      });

    Promise.all(images.map((src) => loadImage(src))).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    return (
<div className="flex justify-center h-screen items-center bg-black">
<div role="status">
    <svg aria-hidden="true" class="w-12 h-12 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>


    )
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="flex justify-between items-center p-5 shadow-md">
        <Link href="/" className="text-xl font-bold text-white">
          SnapPure
          <span className="text-sm font-thin border-2 p-1 rounded-2xl border-green-400 ml-2">
            beta v1
          </span>
        </Link>
        <div className="md:gap-10 gap-2 text-sm font-normal hidden md:flex">
          <Link href="#how-it-works" className="">
            <h1 className="text-white">How it works</h1>
          </Link>
          <Link href="#contact" className="">
            <h1 className="text-white">Contact</h1>
          </Link>
        </div>
      </nav>
      <section className="flex flex-col items-center text-center py-5 text-white ">
        <h1 className="md:text-5xl text-3xl font-extrabold leading-tight">
          Safety First: Instantly Understand
          <br />
          <span className="px-3 text-gradient">Product Ingredients</span>
        </h1>
        <p className="md:text-base text-sm mt-4 max-w-2xl text-slate-300 mx-2 text-center">
          Discover the truth with SnapPure. Snap a photo of any food or cosmetic products ingredients, and our Gemini AI gives you instant analysis.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <div className="w-full md:w-screen flex justify-center ">
            <Link
              href="/analyse"
              className="py-3 rounded-3xl m-2 p-5 font-semibold text-white w-max border-green-900 border-2 bg-gradient-to-r from-[#4bae00] to-[#b1ffaa] hover:bg-gradient-to-r hover:from-[#b1ffaa] hover:to-[#4bae00] shadow-md transition duration-300 flex gap-1 justify-center items-center"
            >
              <div>
                <div className="flex justify-between gap-2 items-center">
                  <h1 className="text-black font-bold">Try It Now</h1>
                  <BsStars className="bg-transparent" color="black" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="flex justify-around">
          <img src="hero1.svg" alt="" className="md:h-64 h-20 w-auto" />
          <img src="hero3.svg" alt="" className="md:h-96  h-48 w-auto" />
          <img src="hero2.jpg" alt="" className="md:h-64 h-20 w-auto" />
        </div>
      </motion.div>
      <section id="how-it-works" className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Know Your Products in 2 Steps</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-gradient"> Step 1</span>: Scan Product Ingredients
                </h3>
                <p className="text-lg text-gray-300">
                  Take a clear picture of the product ingredients label. Select the type of product cosmetic or food
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="/steps-images/step-1.jpg" alt="Generate Interview Questions" className="w-auto h-52 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:order-2 md:pl-8 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-gradient">Step 2</span>: AI Analysis and Insights
                </h3>
                <p className="text-lg">
                  Our advanced AI analyzes the ingredients and provides detailed charts and descriptions about the product.
                </p>
              </div>
              <div className="md:w-1/2 md:order-1 flex justify-center">
                <img src="/steps-images/step-2.gif" alt="Record Audio Responses" className="w-auto h-64 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="pb-5">
        <div className="flex justify-center items-center h-full gap-3">
          <h1 className="text-white">@shaikhazrathali</h1>
          <Link href="https://www.linkedin.com/in/shaik-hazrathali-856349253/" target="_blank">
            <FaLinkedin size={30} color="white" />
          </Link>
          <Link href="https://x.com/shaikhazrathali" target="_blank">
            <FaSquareXTwitter size={30} color="white" />
          </Link>
          <Link href="https://www.instagram.com/hazrathhehe" target="_blank">
            <AiFillInstagram size={33} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
}
