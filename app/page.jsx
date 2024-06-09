"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import CustomCarousel from "@/components/Carousel";
import { motion } from "framer-motion"

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    const chechAuth = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/user/checkauth`, {
          headers: {
            authorization: token
          }
        })
        setAuthenticated(true)
      } catch (error) {
        console.log(error)
        setAuthenticated(false)
      }
    }
    chechAuth()
  }, [])
  return (
    <div className="min-h-screen bg-black">
      <nav className="flex justify-between items-center p-5 shadow-md">
        <Link href="/" className="text-xl font-bold text-white">
          SnapPure
          <span className=" text-sm font-thin border-2 p-1 rounded-2xl border-green-400 ml-2"> beta v1</span>
        </Link>
        <div className="md:gap-10 gap-2 text-sm font-normal hidden md:flex">
          <Link href="#how-it-works" className="">
            <h1 className="text-white">
              How it works
            </h1>
          </Link>
          <Link href="#contact" className="">
            <h1 className="text-white">
              Contact
            </h1>
          </Link>
        </div>
      </nav>
      <header className="flex flex-col items-center text-center py-5  text-white ">
      <h1 className="md:text-5xl text-3xl font-extrabold leading-tight">
      Safety First: Instantly Understand
      <br />
          <span className='px-3 text-gradient'>
          Product Ingredients
          </span>
        </h1>
        <p className="md:text-base text-sm mt-4 max-w-2xl text-slate-300 mx-2 text-center">
        Discover the truth with SnapPure. Snap a photo of any product's ingredients, and our Gemini AI gives you instant analysis.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <div className="w-full md:w-screen flex  justify-center ">
            <Link href='/analyse'
              className='py-3 rounded-3xl m-2 p-5 font-semibold text-white w-max  border-green-900 border-2 bg-gradient-to-r from-[#4bae00] to-[#b1ffaa] hover:bg-gradient-to-r hover:from-[#b1ffaa] hover:to-[#4bae00] shadow-md transition duration-300 flex gap-1 justify-center items-center'>
              <div>
                <div className=' flex justify-between gap-2 items-center'>
                  <h1 className="text-black font-bold">Try It Now</h1>
                  <BsStars className=' bg-transparent' color="black" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

<section  className=" flex justify-center flex-col items-center rounded-3xl">
<CustomCarousel/>

</section>


      <section id="how-it-works" className="py-16 bg-black text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Know Your Products in 2 Steps </h2>
    <div className="space-y-12">
   
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2"><span className='text-gradient'> Step 1</span>: Scan Product Ingredients</h3>
          <p className="text-lg text-gray-300">
          Take a clear picture of the product ingredients label. Select the type of product cosmetic or food 
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/steps-images/step-1.jpg" alt="Generate Interview Questions" className="w-auto h-52 rounded-md"/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2 md:pl-8 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2"><span className='text-gradient'>Step 2</span>: AI Analysis and Insights</h3>
          <p className="text-lg">
          Our advanced AI analyzes the ingredients and provides detailed charts and descriptions about the product.
          </p>
        </div>
        <div className="md:w-1/2 md:order-1 flex justify-center">
          <img src="/steps-images/step-2.gif" alt="Record Audio Responses" className="w-auto h-64 rounded-md"/>
        </div>
      </div>
    
    </div>
  </div>
</section>



      <section id="contact" className=" pb-5" >
        <div className="flex justify-center items-center h-full gap-3">
          <h1 className=" text-white ">@shaikhazrathali</h1>
          <Link href='https://www.linkedin.com/in/shaik-hazrathali-856349253/' target="_blank">
            <FaLinkedin size={30} color="white" />
          </Link>
          <Link href='https://x.com/shaikhazrathali' target="_blank">
            <FaSquareXTwitter size={30} color="white" />
          </Link>
          <Link href='https://www.instagram.com/hazrathhehe' target="_blank">
            <AiFillInstagram size={33} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
}
