import React from 'react';
import Image from 'next/image';
import {client} from '../../../sanity/lib/client';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';



export const getProductData = async () => {
  // here we check condition first we filter "products" from all data and then filter through id like " && _id == '11354546488444' " so data show accordingly.
  // here we also check throug index [0].
  // we also fetch only title and description by using curly braces after square brackets like "{name,description}".
 const response = await client.fetch(`*[ _type == 'product']{name,type,price,image}`);
 return response;
}

interface Product {
  name : string,
  type : string,
  price : number,
  image : IImage,
}

export default async function page() {
  const data :Product[]  = await getProductData();
  return (
    <main>
      <div className='grid grid-cols-4 justify-items-center gap-16 my-16 mx-32'>
        {data.map((item) =>(
            <div key={item.name}>
              <a href='/detail'>
                <div>
                  <Image src={urlForImage(item.image).url()} alt='productImg' height={270} width={250} />
                  <p className='text-[1.05rem] leading-6 mt-2 font-semibold tracking-wide text-[#212121]'>{item.name}</p>
                  <p className='text-base mt-1 font-semibold text-[#888]'>{item.type}</p>
                  <p className='text-xl mt-3 font-semibold tracking-wide text-[#212121]'>${item.price}</p>
                </div>
              </a>
            </div>
        ))}
      </div>
    </main>
  )
}