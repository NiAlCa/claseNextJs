"use client";

import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }) => {
  const [contador, setContador] = useState(value);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <span className=" text-9xl">{contador}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={increment}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={decrement}
        >
          -1
        </button>
      </div>
    </>
  );
};
