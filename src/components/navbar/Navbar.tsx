import Link from "next/link";
import React from "react";
import AuthLinks from "../auth-links/AuthLinks";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4">
      <div className="text-3xl font-bold">Dmytrii Ivankevych</div>
      <div className="flex justify-between items-center space-x-4">
        <ThemeToggle/>
        <Link href="/">Homepage</Link>
        <Link href="/">Contacts</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
