import React from 'react';
import EmptyCart from '@/components/EmptyCart';
import ItemCart from '@/components/ItemCart';



const page = () => {
  return (
    <>
        <ItemCart />
        <EmptyCart />
    </>
  )
}

export default page