import React from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import {client} from '../../../../sanity/lib/client';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../../sanity/lib/image';
import CartButton from '@/components/CartButton';


async function getProductData(id1: string) {
  const productsData = await client.fetch(`*[ _type == 'product' && _id == '${id1}']{_id,name,type,price,description,care[],image[]}`);
  return productsData;
}

interface Product {
  _id : string,
  name : string,
  type : string,
  price : number,
  description : string,
  care : string[],
  image : IImage[],
}


export default async function Page({ params }: { params: { _id: string } }) {
  const data :Product[]  = await getProductData(params._id);
  return (
    <div className='bg-[#fcfcfc] py-16 px-32'>
          {/* Detail Container */}
          <div className='flex justify-between'>
            {/* Product Images */}
            <div className='flex flex-2 gap-8'>
              {/* small image container */}
                <div className='flex flex-col gap-4 cursor-pointer'>
                    {data[0].image.map((item) =>(
                        <Image key={data[0]._id} src={urlForImage(item).url()} alt='productImg' height={100} width={100} />
                    ))}
                </div>
              {/* large image container */}
                <div className='w-4/5 h-full'>
                  <Image src={urlForImage(data[0].image[0]).url()} alt='productImg' height={1000} width={1000} />
                </div>
            </div>

              {/* Product Detail */}
            <div className='flex flex-1 flex-col gap-8 mt-16'>
              <div>
                <h3 className='font-medium text-[1.625rem] leading-8 tracking-wider'>{data[0].name}</h3>
                <span className='font-bold text-[1.3rem] opacity-[0.3]'>{data[0].type}</span>
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
                <CartButton _id = {data[0]._id} />     
                <p className='font-bold text-2xl tracking-widest text-[#212121]'>${data[0].price}</p>
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
                <p className='flex-2 font-normal tracking-wider text-justify text-lg text-[#212121]'>{data[0].description}</p>
              </div>
              <div className='flex'>
                <h4 className='flex-1 font-bold text-lg uppercase tracking-wider text-[#666]'>Product Care</h4>
                <ul className='flex-2 font-semibold text-lg tracking-wider list-inside list-disc'>
                    {data[0].care.map((item) =>(
                        <li key={data[0]._id}>{item}</li> 
                    ))}
                </ul>
              </div>
          </div>

    </div>
  )
}