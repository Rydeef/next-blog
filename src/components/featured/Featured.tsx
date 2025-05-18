import { Button } from "@/shared/button/Button";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl">
        <b>Welcome to my blog!</b> Discover my stories and useful tips!
      </h1>
      <div className="flex justify-between items-center mt-8">
        <div className="w-1/2">
          <Image
            src="/p1.jpeg"
            alt="horizon.jpg"
            height={500}
            width={346}
            className="flex-1"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, nostrum? Dolore pariatur voluptatibus placeat adipisci
            debitis id commodi, nemo quisquam, eaque corporis illum veritatis
            laudantium quaerat earum molestias eligendi? Eveniet!
          </p>
          <Button className="mt-4">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
