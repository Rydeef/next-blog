"use client";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { JSX, useContext } from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: JSX.Element | string;
  variant?: "button" | "link";
}

export const Button = ({
  children,
  className,
  variant = "button",
  onClick,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames({
        "px-2 py-1 hover:bg-transparent duration-150 cursor-pointer": true,
        "border-white border-1 hover:text-white bg-white text-black rounded active:bg-white":
          theme === Theme.DARK && variant == "button",
        "border-black border-1 hover:text-black bg-black text-white rounded active:bg-black":
          theme === Theme.LIGHT && variant == "button",
        "hover:text-purple-400": variant == "link",
        "border-b-1 hover:border-purple-400":
          theme === Theme.DARK && variant == "link",
        "border-b-1 border-black hover:border-purple-400":
          theme === Theme.LIGHT && variant == "link",
        [className!]: className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
