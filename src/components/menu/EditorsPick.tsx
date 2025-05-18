import Image from "next/image";
import Link from "next/link";

export const EditorsPick = () => {
  return (
    <div>
      <Link href="/">
        <div className="my-8 flex items-center">
          <Image
            src="/culture.png"
            alt="culture"
            height={64}
            width={64}
            className="rounded-full aspect-square object-cover mr-4 border-4 border-purple-400"
          />
          <div>
            <span className="bg-purple-400 px-2 rounded-xl text-sm">
              Travel
            </span>
            <div className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-sm mt-1">
              John Doe - <span className="text-gray-400">2025.05.18</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="my-8 flex items-center">
          <Image
            src="/culture.png"
            alt="culture"
            height={64}
            width={64}
            className="rounded-full aspect-square object-cover mr-4 border-4 border-purple-400"
          />
          <div>
            <span className="bg-purple-400 px-2 rounded-xl text-sm">
              Travel
            </span>
            <div className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-sm mt-1">
              John Doe - <span className="text-gray-400">2025.05.18</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="my-8 flex items-center">
          <Image
            src="/culture.png"
            alt="culture"
            height={64}
            width={64}
            className="rounded-full aspect-square object-cover mr-4 border-4 border-purple-400"
          />
          <div>
            <span className="bg-purple-400 px-2 rounded-xl text-sm">
              Travel
            </span>
            <div className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-sm mt-1">
              John Doe - <span className="text-gray-400">2025.05.18</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="my-8 flex items-center">
          <Image
            src="/culture.png"
            alt="culture"
            height={64}
            width={64}
            className="rounded-full aspect-square object-cover mr-4 border-4 border-purple-400"
          />
          <div>
            <span className="bg-purple-400 px-2 rounded-xl text-sm">
              Travel
            </span>
            <div className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-sm mt-1">
              John Doe - <span className="text-gray-400">2025.05.18</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
