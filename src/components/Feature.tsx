import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';


const Feature = () => {
  return (
    <div className='space-y-10 h-screen'>
        <div className='flex justify-end mr-48'>
            <h1 className="font-bold text-5xl tracking-wide max-w-xl">
                Unique and Authentic Vintage Designer Jewellery
            </h1>
        </div>
        {/* Main Div Having Left And Right Div */}
        <div className='flex justify-center'>
            {/* Left Side Content */}
            <div className='grid grid-cols-2 grid-rows-2 max-w-xl gap-8 justify-center items-center relative'>
                <h1 className="text-[110px] leading-[110px] font-extrabold tracking-wide text-[#ececed] absolute z-[-1]">Different from others</h1>
                <div className='w-[70%] space-y-3'>
                    <h4 className="text-lg font-bold tracking-wide">
                        Using Good Quality Materials
                    </h4>
                    <p className="text-base font-normal tracking-wider">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                </div>
                <div className='w-[70%] space-y-3'>
                    <h4 className="text-lg font-bold tracking-wide">
                        100% Handmade Products
                    </h4>
                    <p className="text-base font-normal tracking-wider">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                </div>
                <div className='w-[70%] space-y-3'>
                    <h4 className="text-lg font-bold tracking-wide">
                        Modern Fashion Design
                    </h4>
                    <p className="text-base font-normal tracking-wider">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                </div>
                <div className='w-[70%] space-y-3'>
                    <h4 className="text-lg font-bold tracking-wide">
                        Discount for Bulk Orders
                    </h4>
                    <p className="text-base font-normal tracking-wider">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                </div>
            </div>

            {/* Right Side Content */}
            <div className='flex gap-8 max-w-2xl items-center'>
                <Image src={'/assets/feature.png'} alt='img' width={300} height={350} />
                <div className='space-y-8'>
                    <p className='text-lg font-normal text-justify tracking-wider text-[#212121]'>
                        This piece is ethically crafted in our small family-owned workshop in Peru with
                        unmatched attention to detail and care. The Natural color is the actual natural color 
                        of the fiber, undyed and 100% traceable.
                    </p>
                    <Button className='px-4'>
                        See All Product
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature