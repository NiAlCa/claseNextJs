'use client';

import Link from "next/link";
import React from "react";
import Style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname();
    console.log(pathName);

  return <Link className={`${Style.link} ${(pathName === path ) && Style['active-link']}`} href={path}>{text}</Link>;
};
