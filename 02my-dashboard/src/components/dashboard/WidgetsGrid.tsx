"use client";

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";

export const WidgetsGrid = () => {

  const count = useAppSelector((state) => state.counter.count);
  const isCart: string = String(count);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={isCart}
        subtitle="producto carritos contra"
        icon={<IoCafeOutline size={70} className="text-blue-600"/>}
        label="Contador"
        href="/counter"
      />
    </div>
  );
};
