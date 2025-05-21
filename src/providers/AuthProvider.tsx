"use client";

import { SessionProvider } from "next-auth/react";
import { JSX } from "react";

interface Props {
  children: JSX.Element;
}

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
