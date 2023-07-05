import React from 'react'; 
import {FiShoppingCart} from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';


const HeroSection = () => {
  return (
    <div className='flex justify-center items-center gap-16 h-screen'>
      {/* Header left Side */}
      <div className='flex flex-col space-y-32'>
        {/* Header Content */}
        <div className='max-w-xl space-y-10 justify-between'>
            <span className='bg-blue-100 px-6 py-2 font-bold text-[#0000ff] rounded'>Sale 70%</span>
            <h1 className="text-6xl font-bold text-[#212121] tracking-wide">
              An Industrial Take on Streetwear
            </h1>
            <p className="text-[#666] text-lg font-normal max-w-sm">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Button className='font-bold p-7'>
              <FiShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
            </Button>
        </div>
        {/* Header Feature */}
        <div className='grid grid-cols-4 grid-rows-1 gap-4'>
          <Image src={'/assets/Featured1.png'} alt="logo" width={100} height={35}/>
          <Image src={'/assets/Featured2.png'} alt="logo" width={100} height={35}/>
          <Image src={'/assets/Featured3.png'} alt="logo" width={100} height={35}/>
          <Image src={'/assets/Featured4.png'} alt="logo" width={100} height={35}/>
        </div>
      </div>
      <div className='bg-[#ffece3] h-{600} w-{600} rounded-full justify-center items-center flex'>
        <Image src={'/assets/headerImg.png'} alt='heroImg' width={650} height={650}/>
      </div>
    </div>
  )
}

export default HeroSection