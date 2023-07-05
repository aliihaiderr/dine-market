import React from 'react';
import ProductCard from '@/components/ProductCard';

const page = () => {
  return (
    <main>
      <div className='grid grid-cols-4 justify-items-center gap-16 my-16 mx-32'>
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}

export default page