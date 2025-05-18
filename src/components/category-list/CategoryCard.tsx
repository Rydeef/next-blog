import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  imagesrc: string;
  imagealt: string;
  label: string;
}

export const CategoryCard = ({ href, imagesrc, imagealt, label }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center bg-purple-400 p-4 w-1/8 space-x-1 rounded-xl"
    >
      <Image
        src={imagesrc}
        alt={imagealt}
        width={32}
        height={32}
        className="rounded-full aspect-square object-cover"
      />
      <span className="text-sm ml-1">{label}</span>
    </Link>
  );
};
