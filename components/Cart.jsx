"use client";

import { removeCart } from '@/redux/slice/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cart.shoppingCart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 my-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-slate-700 p-2 rounded-md">
          <div className="flex items-center gap-6">
            <img className="w-[6rem]" src={item.image_url} alt="image" />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeCart(item))}
            className="hover:opacity-75 text-[1.5rem]">
            🗑️
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart