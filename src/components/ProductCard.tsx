import React from 'react';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div>
      <a href='/detail'>
        <div>
          <Image src={'/assets/img3.png'} alt='productImg' height={270} width={250} />
          <p className='text-[1.05rem] leading-6 mt-2 font-semibold tracking-wide text-[#212121]'>Flex Sweatshirt</p>
          <p className='text-base mt-1 font-semibold text-[#888]'>Sweater</p>
          <p className='text-xl mt-3 font-semibold tracking-wide text-[#212121]'>$195</p>
        </div>
      </a>
    </div>
  )
}

export default ProductCard