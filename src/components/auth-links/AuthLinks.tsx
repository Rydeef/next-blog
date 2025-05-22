"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AuthLinks = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { data, status } = useSession();

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
    <div className="flex items-center justify-between space-x-4">
      <Link href="/write">Write</Link>
      {data?.user?.image ? (
        <Image
          src={data?.user?.image}
          alt="culture"
          height={48}
          width={48}
          className="rounded-full aspect-square object-cover mr-4 border-4 ml-16"
        />
      ) : null}
      <span className="cursor-pointer" onClick={logout}>
        Logout
      </span>
    </div>
  );
};

export default AuthLinks;
