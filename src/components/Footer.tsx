import React from 'react';
import Image from "next/image";
import {GrTwitter,GrFacebookOption,GrLinkedinOption} from 'react-icons/gr';


const Footer = () => {
  return (
    <footer className='bg-[#fff]'>
        <div className='grid grid-cols-5 py-16 px-32 h-full'>
          <div className='flex flex-col col-span-2 justify-between w-4/5'>
            <Image src={'/assets/Logo.png'} alt="logo" width={180} height={30} />
            <p className="text-base font-normal tracking-wide text-[#666]">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
            </p>
            <div className='flex gap-4'>
              <span className='bg-[#f1f1f1] p-3 rounded-xl cursor-pointer'><GrTwitter className=' h-5 w-6' /></span>
              <span className='bg-[#f1f1f1] p-3 rounded-xl cursor-pointer'><GrFacebookOption className=' h-5 w-6' /></span>
              <span className='bg-[#f1f1f1] p-3 rounded-xl cursor-pointer'><GrLinkedinOption className=' h-5 w-6' /></span>
            </div>
          </div>
          <div className='space-y-4'>
              <h4 className="text-xl font-bold tracking-wide text-[#666]">
              Company
              </h4>
              <ul className='text-lg font-normal tracking-wide space-y-2 cursor-pointer text-[#666]'>
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
          </div>
          <div className='space-y-4'>
              <h4 className="text-xl font-bold tracking-wide text-[#666]">
              Support
              </h4>
              <ul className='text-lg font-normal tracking-wide space-y-2 cursor-pointer text-[#666]'>
                <li>Support Carrer</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
          </div>
          <div className='space-y-4'>
              <h4 className="text-xl font-bold tracking-wide text-[#666]">
              Contact
              </h4>
              <ul className='text-lg font-normal tracking-wide space-y-2 cursor-pointer text-[#666]'>
                <li>Whatsapp</li>
                <li>Support 24h</li>
              </ul>
          </div>
        </div>
        {/* Copyright Section */}
        <div className='grid grid-cols-3 mt-24 border-t-[1px] border-[#666] tracking-wide'>
          <p className="text-base font-normal text-[#666] my-6 mx-32">Copyright © 2022 Dine Market</p>
          <p className="text-base font-normal text-[#666] my-6 mx-32">Design by.<span className='font-bold text-[#212121]'>Weird Design Studio</span></p>
          <p className="text-base font-normal text-[#666] my-6 mx-32">Code by.<span className='font-bold text-[#212121]'>aliihaiderr on github</span></p>
        </div>
    </footer>
      
    
  )
}

export default Footer