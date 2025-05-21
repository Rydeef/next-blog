"use client";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";

export const Textarea = (props: React.HTMLProps<HTMLTextAreaElement>) => {
  const { theme } = useContext(ThemeContext);

  return (
    <textarea
      value={props.value}
      onChange={props.onChange}
      {...props}
      rows={6}
      className={classNames({
        "w-full border-1 p-1 outline-0 resize-none ": true,
        "placeholder-black": theme === Theme.LIGHT,
        "placeholder-white": theme === Theme.DARK,
      })}
    ></textarea>
  );
};
