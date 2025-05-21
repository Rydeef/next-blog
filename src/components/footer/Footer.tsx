import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between my-8">
      <div className="flex-1/2">
        <div className="font-bold">Dmytrii Ivankevych</div>
        <p className="text-sm mt-4 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          sapiente natus, ducimus provident in velit qui libero, totam nisi ex
          illum quae consequatur culpa esse laboriosam quam praesentium eaque
          adipisci?
        </p>
      </div>
      <div className="flex-1/2 flex justify-end space-x-24">
        <div className="flex flex-col">
          <div>Links</div>
          <Link href="/" className="text-sm text-gray-400">Homepage</Link>
          <Link href="/" className="text-sm text-gray-400">Contact</Link>
          <Link href="/" className="text-sm text-gray-400">About</Link>
        </div>
        <div className="flex flex-col">
          <div>Tags</div>
          <Link href="/blog?cat=style" className="text-sm text-gray-400">Style</Link>
          <Link href="/blog?cat=fashion" className="text-sm text-gray-400">Fashion</Link>
          <Link href="/blog?cat=coding" className="text-sm text-gray-400">Coding</Link>
          <Link href="/blog?cat=travel" className="text-sm text-gray-400">Travel</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
