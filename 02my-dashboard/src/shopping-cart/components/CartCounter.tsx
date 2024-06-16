"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, subStractOne } from "@/store/counter/counterSlice";
import React, { useEffect, useState } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse{
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch('/api/counter').then(res => res.json());

  return data as CounterResponse;


}

export const CartCounter = ({ value = 0 }) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();


  useEffect(() => {
    getApiCounter()
    .then( ({count}) => dispatch( initCounterState(count)))
  }, [dispatch])
/*
  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);
*/
  //const [contador, setContador] = useState(value);

  /* const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };*/

  return (
    <>
      <span className=" text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(subStractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
