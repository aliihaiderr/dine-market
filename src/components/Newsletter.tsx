import React from 'react';
import { Button } from "@/components/ui/button";


const Newsletter = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center space-y-6 h-96'>
            <h1 className="text-[7.5rem] leading-[151px] font-extrabold tracking-widest text-[#f2f3f7] absolute z-[-1]">
                Newsletter
            </h1>
            <h2 className="pb-2 text-4xl font-bold tracking-wide text-[#212121]">
                Subscribe Our Newsletter
            </h2>
            <p className="text-[#212121] text-base font-normal tracking-wider max-w-md">
                Get the latest information and promo offers directly
            </p>
            <div className='flex gap-2'>
                <input
                    type="text"
                    placeholder="Input email address"
                    className='border border-gray-400 py-2 pl-2 pr-32 text-sm'
                />
                <Button className='px-5 py-3'>
                    Get Started
                </Button>
            </div>
        </div>
    </>
  )
}

export default Newsletter