import { Button } from "@/shared/button/Button";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch(
    `https://next-blog-pkle.vercel.app/api/posts/cmay92vlv0004uil8s20uklx4`
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Featured = async () => {
  const data: Post = await getData();

  return (
    <div className="mt-8">
      <h1 className="text-4xl">
        <b>Welcome to my blog!</b> Discover my stories and useful tips!
      </h1>
      <div className="flex justify-between items-center mt-8">
        <div className="w-1/2">
          <Image
            src={data.img!}
            alt="featured"
            height={500}
            width={346}
            className="flex-1"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold">{data.title}</h2>
          <p className="mt-2">{data.desc.substring(0, 128)}...</p>
          <Link href="/posts/cmay92vlv0004uil8s20uklx4">
            <Button className="mt-4">Read more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
