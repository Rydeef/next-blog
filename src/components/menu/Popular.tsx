import Link from "next/link";

export const Popular = () => {
  return (
    <div>
      <div className="my-8">
        <Link href="/" >
          <span className="bg-purple-400 px-2 rounded-xl text-sm">Travel</span>
          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm mt-1">
            John Doe - <span className="text-gray-400">2025.05.18</span>
          </div>
        </Link>
      </div>
       <div className="my-8">
        <Link href="/" >
          <span className="bg-purple-400 px-2 rounded-xl text-sm">Travel</span>
          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm mt-1">
            John Doe - <span className="text-gray-400">2025.05.18</span>
          </div>
        </Link>
      </div>
       <div className="my-8">
        <Link href="/" >
          <span className="bg-purple-400 px-2 rounded-xl text-sm">Travel</span>
          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm mt-1">
            John Doe - <span className="text-gray-400">2025.05.18</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
