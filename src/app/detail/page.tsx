import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {FiShoppingCart} from 'react-icons/fi';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';



const page = () => {
  return (
    <div className='bg-[#fcfcfc] py-16 px-32'>

      {/*Detail Container */}
      <div className='flex justify-between'>
        {/* Product Images */}
        <div className='flex flex-2 gap-8'>
          {/* small image container */}
            <div className='flex flex-col gap-4 cursor-pointer'>
              <Image src={'/assets/img3.png'} alt='img' width={100} height={100}/>
            </div>
          {/* large image container */}
            <div className='w-4/5 h-full'>
              <Image src={'/assets/img3.png'} alt='img' width={1000} height={1000} />
            </div>
        </div>

          {/* Product Detail */}
        <div className='flex flex-1 flex-col gap-8 mt-16'>
          <div>
            <h3 className='font-medium text-[1.625rem] leading-8 tracking-wider'>Flex Sweatshirt</h3>
            <span className='font-bold text-[1.3rem] opacity-[0.3]'>Sweater</span>
          </div>
          <div>
            <p className='font-bold text-[0.9rem] leading-4 tracking-wider'>SELECT SIZE</p>
            <ul className='flex gap-4 mt-4 text-[#666] text-base font-bold tracking-wider'>
              <li className='flex justify-center items-center rounded-full w-10 h-10 cursor-pointer hover:shadow-xl'>XS</li>
              <li className='flex justify-center items-center rounded-full w-10 h-10 cursor-pointer hover:shadow-xl'>S</li>
              <li className='flex justify-center items-center rounded-full w-10 h-10 cursor-pointer hover:shadow-xl'>M</li>
              <li className='flex justify-center items-center rounded-full w-10 h-10 cursor-pointer hover:shadow-xl'>L</li>
              <li className='flex justify-center items-center rounded-full w-10 h-10 cursor-pointer hover:shadow-xl'>XL</li>
            </ul>
          </div>
          <div className='flex gap-8'>
            <h4 className='font-bold text-lg'>Quantity:</h4>
            <div className='flex justify-center items-center gap-2'>
              <span className='bg-[#f1f1f1] p-3 rounded-full cursor-pointer'><AiOutlineMinus/></span>
              <span>1</span>
              <span className='border-2 border-[#000] rounded-full p-2 cursor-pointer'><AiOutlinePlus/></span>
            </div>
          </div>
          <div className='flex gap-4'>
            <Button className='px-6'>
              <FiShoppingCart className="mr-2 h-5 w-5" />  Add to Cart
            </Button>
            <p className='font-bold text-2xl tracking-widest text-[#212121]'>$175.00</p>
          </div>
        </div>
      </div>

      {/*Description Container */}
      <div className='flex flex-col bg-[#fff] mt-16 pt-8 px-16 pb-24 gap-8'>
          <div className='flex border-b-2 border-[#c4c4c4] relative z-[2]'>
              <div className="font-extrabold text-[7.5rem] leading-[151px] text-[#f2f3f7] opacity-70">
                  Overview
              </div>
              <h2 className='font-bold text-2xl tracking-wider text-[#212121] top-[45%] absolute'>Product Information</h2>
          </div>
          <div className='flex'>
            <h4 className='flex-1 font-bold text-lg uppercase tracking-wider text-[#666]'> Product Details </h4>
            <p className='flex-2 font-normal tracking-wider text-justify text-lg text-[#212121]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='flex'>
            <h4 className='flex-1 font-bold text-lg uppercase tracking-wider text-[#666]'>Product Care</h4>
            <ul className='flex-2 font-semibold text-lg tracking-wider list-inside list-disc'>
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default page