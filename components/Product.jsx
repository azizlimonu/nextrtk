"use client";

import { addToCart } from '@/redux/slice/cartSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.cart.shoppingCart);

  const isItemInCart = (id) => {
    return shopList.some((item) => item?.id === id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item, i) => (
        <div key={i} className="bg-slate-700 rounded-md p-4">
          <img className="w-3/4 mx-auto" src={item.image_url} alt="img" />
          <div className="py-4">
            <p className="text-white text-center font-semibold">{item.title}</p>
            <p className="text-white text-center">${item.price}</p>
          </div>
          <button
            className={`bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800 rounded-md ${isItemInCart(item.id) ? 'pointer-events-none bg-slate-500' : ''
              }`}
            onClick={() => dispatch(addToCart(item))}>
            {isItemInCart(item.id) ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Product;