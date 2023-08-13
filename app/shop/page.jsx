"use client";

import Cart from '@/components/Cart';
import Product from '@/components/Product';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {
  const data = useSelector((state) => state.cart.shoppingCart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data) {
      const totalPrice = data.reduce((acc, item) => acc + item.price, 0);
      setTotal(totalPrice);
    }
  }, [data]);

  return (
    <div className="w-[80%] mx-auto mt-[8rem]">
      <Product />

      {data && <Cart />}

      <div className="bg-slate-700 w-[20rem] p-4 mb-[2rem] ml-auto rounded-md">
        <h1 className="text-2xl pb-2">Subtotal Prices</h1>
        <p>Total Price : ${total}</p>
        <button className="w-full text-center bg-blue-700 py-2 mt-6 hover:bg-blue-800 rounded-md">
          Process The Payment
        </button>
      </div>
    </div>
  )
}

export default Page