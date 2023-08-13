"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incremetWithAmount,
  decremetWithAmount,
  reset,
} from '@/redux/slice/counterSlice';

const Page = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementWithAmount = (amount) => {
    dispatch(incremetWithAmount(amount));
  };

  const handleDecrementWithAmount = (amount) => {
    dispatch(decremetWithAmount(amount));
  };

  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button
          onClick={handleIncrement}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          onClick={handleDecrement}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Reset
        </button>
        <button
          onClick={() => handleIncrementWithAmount(5)}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Increment by 5
        </button>
        <button
          onClick={() => handleDecrementWithAmount(5)}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Decrement by 5
        </button>
      </div>
    </main>
  );
};

export default Page;
