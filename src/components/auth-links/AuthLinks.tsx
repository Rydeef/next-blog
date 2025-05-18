"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const [isAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Link href="/login">Login</Link>;
  }

  return (
    <>
      <Link href="/write">Write</Link>
      <span className="cursor-pointer">Logout</span>
    </>
  );
};

export default AuthLinks;
