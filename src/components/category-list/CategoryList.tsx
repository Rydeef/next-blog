import React from "react";
import { CategoryCard } from "./CategoryCard";

const CATEGORY_MAPPING = [
  {
    href: "/",
    imagesrc: "/style.png",
    imagealt: "style",
    label: "Style",
  },
  {
    href: "/",
    imagesrc: "/fashion.png",
    imagealt: "fashion",
    label: "Fashion",
  },
  {
    href: "/",
    imagesrc: "/food.png",
    imagealt: "food",
    label: "Food",
  },
  {
    href: "/",
    imagesrc: "/travel.png",
    imagealt: "travel",
    label: "Travel",
  },
  {
    href: "/",
    imagesrc: "/culture.png",
    imagealt: "culture",
    label: "Culture",
  },
  {
    href: "/",
    imagesrc: "/coding.png",
    imagealt: "coding",
    label: "Coding",
  },
];

const CategoryList = () => {
  return (
    <div className="mt-16">
      <h3 className="font-bold">Popular Categories</h3>
      <div className="flex justify-between mt-4">
        {CATEGORY_MAPPING.map((props) => (
          <CategoryCard {...props} key={props.imagesrc} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
