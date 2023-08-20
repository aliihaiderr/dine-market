'use client'
import React, { FC } from 'react';
import { Button } from "@/components/ui/button";
import {FiShoppingCart} from 'react-icons/fi';


interface IItems{
  _id: string,
}

const CartButton: FC<{_id: string}> = ({_id}) => {

    const handleAddToCart = async () => {
        const res = await fetch("/api/cart", {
          method:"Post",
          body:JSON.stringify({
            product_id: _id,
          })
        })

        const result = await res.json();
        console.log(result);
    }
  return (
    <Button onClick={()=> handleAddToCart()} className='px-6'>
    <FiShoppingCart className="mr-2 h-5 w-5" />  Add to Cart
    </Button>
  )
}

export default CartButton

