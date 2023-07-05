import React from 'react';
import {RiShoppingBagLine} from 'react-icons/ri';


const EmptyCart = () => {
  return (
    <main>
        <div className='my-16 mx-32 p-12'>
            <h2 className='font-extrabold text-2xl tracking-wider'>Shopping Cart</h2>
            <div className='flex justify-between gap-16'>
                {/* cart items*/}
                <div className='flex flex-col flex-3 mt-8 gap-16'>
                    {/* empty cart */}
                    <div className='flex flex-col justify-center items-center '>
                        <RiShoppingBagLine className='w-36 h-36' />
                        <h1 className='font-bold text-3xl'>Your shopping bag is empty</h1>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default EmptyCart