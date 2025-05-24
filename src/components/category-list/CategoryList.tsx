import React from "react";
import { CategoryCard } from "./CategoryCard";
import { Category } from "@prisma/client";

const getData = async () => {
  const res = await fetch("https://next-blog-pkle.vercel.app/api/categories");

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CategoryList = async () => {
  const data: Category[] = await getData();

  if (!data) {
    return <> </>;
  }

  return (
    <div className="mt-16">
      <h3 className="font-bold">Popular Categories</h3>
      <div className="flex justify-between mt-4">
        {data.map((props) => (
          <CategoryCard {...props} key={props.slug} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
