"use client";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { JSX, useContext } from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: JSX.Element | string;
}

export const Button = ({ children, className }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${className} ${classNames({
        "px-2 py-1 rounded hover:bg-transparent duration-100 cursor-pointer":
          true,
        "border-white border-2 hover:text-white bg-white text-black":
          theme === Theme.DARK,
        "border-black border-2 hover:text-black bg-black text-white":
          theme === Theme.LIGHT,
      })}`}
    >
      {children}
    </button>
  );
};
