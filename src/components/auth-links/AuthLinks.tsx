"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AuthLinks = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { status } = useSession();

  const logout = () => {
    signOut();
  };

  useEffect(() => {
    setAuthenticated(status === "authenticated");
  }, [status]);

  if (!isAuthenticated) {
    return <Link href="/login">Login</Link>;
  }

  return (
    <>
      <Link href="/write">Write</Link>
      <span className="cursor-pointer" onClick={logout}>
        Logout
      </span>
    </>
  );
};

export default AuthLinks;
