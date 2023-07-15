import React from 'react';
import Image from 'next/image';
import {client} from '../../../sanity/lib/client';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import { Link } from 'lucide-react';

export const getProductData = async () => {
 const response = await client.fetch(`*[_type=="product" && category->name=='Male']{_id,name,type,price,image[]}`);
 return response;
}

interface Product {
  _id : string,
  name : string,
  type : string,
  price : number,
  image : IImage[],
}

export default async function page() {
  const data :Product[]  = await getProductData();
  return (
    <main>
      <div className='grid grid-cols-4 justify-items-center gap-16 my-16 mx-32'>
        {data.map((item) =>(
            <div key={item._id}>
              <Link href={`/product/${item._id}`}>
                <div>
                  <Image src={urlForImage(item.image[0]).url()} alt='productImg' height={270} width={250} />
                  <p className='text-[1.05rem] leading-6 mt-2 font-semibold tracking-wide text-[#212121]'>{item.name}</p>
                  <p className='text-base mt-1 font-semibold text-[#888]'>{item.type}</p>
                  <p className='text-xl mt-3 font-semibold tracking-wide text-[#212121]'>${item.price}</p>
                </div>
              </Link>
            </div>
        ))}
      </div>
    </main>
  )
}