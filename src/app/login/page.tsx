"use client";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import { Button } from "@/shared/button/Button";
import classNames from "classnames";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const { status } = useSession();

  const signInWithGoogle = () => {
    signIn("google");
  };

  const signInWithGithub = () => {
    signIn("github");
  };

  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center max-h-screen h-148">
        <div
          className={classNames({
            "flex flex-col justify-center items-center w-2/4 rounded-2xl space-y-8":
              true,
            "text-white bg-slate-800": theme === Theme.LIGHT,
            "text-slate-800 bg-white": theme === Theme.DARK,
          })}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center max-h-screen h-148">
      <div className="flex flex-col justify-center items-center w-2/4 rounded-2xl space-y-8 bg-slate-400">
        <Button onClick={signInWithGoogle}>Sign up with Google</Button>
        <Button onClick={signInWithGithub}>Sign up with Github</Button>
      </div>
    </div>
  );
};
export default Login;
