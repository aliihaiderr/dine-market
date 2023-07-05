import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';


const Promotions = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='uppercase text-sm font-bold tracking-widest text-[#0062f5] mb-4'>Promotions</h1>
            <h2 className="leading-10 text-3xl font-bold tracking-widest mb-8">
                Our Promotions Events
            </h2>
        </div>

        <div className='flex justify-center gap-8'>
            {/* left side cards    */}
            <div className='flex flex-col gap-5'>
                    <div className='flex justify-between max-w-3xl px-8 bg-[#d6d6d8]'>
                        <div className='flex flex-col justify-center'>
                            <h3 className="text-3xl font-bold tracking-wide">
                                GET UP TO <span className='text-4xl'>60%</span>
                            </h3>
                            <p className="font-normal text-lg tracking-[0.03em]">
                                For the summer season
                            </p>
                        </div>
                        <Image src={'/assets/event1.png'} alt='event' width={260} height={200}/>
                    </div>
                    <div className='flex flex-col justify-center items-center max-w-3xl py-10 bg-[#212121] text-[#fff]'>
                        <h3 className="text-4xl font-extrabold tracking-widest mb-5">
                            GET 30% Off
                        </h3>
                        <p className="font-normal text-sm tracking-wider">
                            USE PROMO CODE
                        </p>
                        <Button className='font-bold text-base rounded-md uppercase px-12 tracking-[.25em] bg-[#474747] hover:bg-[#434343]'>
                            DineWeekendSale
                        </Button>
                    </div>
            </div>
            {/* Right side cards    */}
            <div className='flex gap-5'>
                <div className='bg-[#efe1c7] pt-4 px-6 max-w-xs'>
                    <div className='flex flex-col justify-center'>
                        <p className="text-base font-normal tracking-wide">
                            Flex Sweatshirt
                        </p>
                        <div className="flex gap-3 text-lg font-semibold tracking-wide">
                            <span className='font-normal line-through'>$100.00</span>
                            <span>$75.00</span>
                        </div>
                    </div>
                    <Image src={'/assets/event2.png'} alt='event' width={280} height={340}/>
                </div>
                <div className='bg-[#d7d7d9] pt-4 px-6 max-w-xs'>
                    <div className='flex flex-col justify-center'>
                        <p className="text-base font-normal tracking-wide">
                            Flex Push Button Bomber
                        </p>
                        <div className="flex gap-3 text-lg font-semibold tracking-wide">
                            <span className='font-normal line-through'>$225.00</span>
                            <span>$190.00</span>
                        </div>
                    </div>
                    <Image src={'/assets/event3.png'} alt='event' width={280} height={340}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promotions