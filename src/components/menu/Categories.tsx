import { Category } from "@prisma/client";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories");

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const Categories = async () => {
  const data: Category[] = await getData();

  return (
    <div className="flex space-x-2 space-y-2 flex-wrap my-4">
      {data.map((category) => (
        <Link href={`/blog?cat=${category.slug}`} key={category.id}>
          <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
            {category.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
