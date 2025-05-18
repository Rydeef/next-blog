import Link from "next/link";

export const Categories = () => {
  return (
    <div className="flex space-x-2 space-y-2 flex-wrap my-4">
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Style
        </div>
      </Link>
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Fashion
        </div>
      </Link>
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Food
        </div>
      </Link>
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Travel
        </div>
      </Link>
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Culture
        </div>
      </Link>
      <Link href="/">
        <div className="bg-purple-400 rounded-xl px-4 py-1 text-sm text-nowrap flex items-center justify-center">
          Coding
        </div>
      </Link>
    </div>
  );
};
