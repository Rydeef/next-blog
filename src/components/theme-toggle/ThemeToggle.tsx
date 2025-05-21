"use client";

import Image from "next/image";
import { useContext } from "react";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className={classNames({
        "flex justify-between items-center rounded-xl relative w-8 h-4 select-none": true,
        "bg-black": theme === Theme.LIGHT,
        "bg-white": theme === Theme.DARK,
      })}
    >
      <Image src="/moon.png" alt="" width={18} height={18} />
      <div
        className={classNames({
          "size-4 rounded-4xl absolute duration-500": true,
          "bg-black": theme === Theme.LIGHT,
          "bg-white ml-4": theme === Theme.DARK,
        })}
      ></div>
      <Image src="/sun.png" alt="" width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;
