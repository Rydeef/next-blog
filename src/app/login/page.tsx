"use client";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full flex justify-center max-h-screen h-148">
      <div
        className={classNames({
          "flex flex-col justify-center items-center w-2/4 rounded-2xl space-y-8":
            true,
          "text-white bg-black": theme === Theme.LIGHT,
          "text-black bg-white": theme === Theme.DARK,
        })}
      >
        <div className="bg-blue-400 p-4 rounded cursor-pointer">Sign up with Google</div>
        <div className="bg-gray-400 p-4 rounded cursor-pointer">Sign up with Github</div>
      </div>
    </div>
  );
};
export default Login;
