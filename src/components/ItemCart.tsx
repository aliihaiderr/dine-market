import React from 'react';
import Image from 'next/image';
import {RiDeleteBinLine} from 'react-icons/ri';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import { Button } from "@/components/ui/button";

const ItemCart = () => {
  return (
     <main>
        <div className='my-16 mx-32 p-12'>
            <h2 className='font-extrabold text-2xl tracking-wider'>Shopping Cart</h2>
            <div className='flex justify-between gap-16'>
                {/* cart items*/}
                <div className='flex flex-col flex-3 mt-8 gap-16'>
                    {/* items detail */}
                    <div className='flex gap-8'>
                        <div>
                            <Image src={'/assets/img3.png'} alt='itemImg' width={190} height={300} className='rounded-xl' />
                        </div>
                        <div className='flex flex-col justify-between w-3/4'>
                            <div className='flex justify-between'>
                                <h3 className='font-normal text-xl tracking-wide'>Flex Sweatshirt</h3>
                                <button type='button'><RiDeleteBinLine className='h-6 w-6 hover:text-red-600'/></button>
                            </div>
                            <p className='font-semibold text-base tracking-wide text-[#666]'>Sweater</p>
                            <p className='font-semibold text-base tracking-wide'>Delivery Estimation</p>
                            <p className='font-semibold text-base tracking-wide text-[#ffc700]'>5 Working Days</p>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg font-bold tracking-widest'>$175</span>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='bg-[#f1f1f1] p-1 rounded-full cursor-pointer'><AiOutlineMinus/></span>
                                    <span>1</span>
                                    <span className='border-2 border-[#000] rounded-full p-1 cursor-pointer'><AiOutlinePlus/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* order summary */}
                <div className='flex flex-col flex-1 gap-7 p-8 bg-[#fbfcff]'>
                    <h3 className='font-bold text-xl'>Order Summary</h3>
                    <div className='flex justify-between gap-16'>
                        <p className=' tracking-wide font-medium'>Quantity</p>
                        <span className=' tracking-wide font-medium'>1 Product</span>
                    </div>
                    <div className='flex justify-between gap-16'>
                        <p className=' tracking-wide font-medium'>Sub Total</p>
                        <span className=' tracking-wide font-medium'>$175</span>
                    </div>
                    <Button className='font-semibold text-sm py-5 px-7'>
                        Process to Checkout
                    </Button>        
                </div>
            </div>
        </div>
    </main>
  )
}

export default ItemCart