"use client";
import classNames from "classnames";
import { createContext, JSX, useEffect, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface Props {
  children: JSX.Element;
}

interface ThemeContextValue {
  theme: Theme;
  toggle: VoidFunction;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: Theme.LIGHT,
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggle = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme") as Theme;
      if (value) setTheme(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div
        className={classNames({
          "duration-150": true,
          "bg-white text-black": theme === Theme.LIGHT,
          "bg-black text-white": theme === Theme.DARK,
        })}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
