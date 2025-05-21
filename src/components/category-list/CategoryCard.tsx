import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const CategoryCard = ({ slug, img, title }: Category) => {
  return (
    <Link
      href={`/blog?cat=${slug}`}
      className="flex items-center justify-center bg-purple-400 p-4 w-1/8 space-x-1 rounded-xl"
    >
      <Image
        src={img!}
        alt={slug}
        width={32}
        height={32}
        className="rounded-full aspect-square object-cover"
      />
      <span className="text-sm ml-1">{title}</span>
    </Link>
  );
};
