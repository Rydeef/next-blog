import Image from "next/image";

export const Comment = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center">
        <Image
          src="/culture.png"
          alt="culture"
          height={48}
          width={48}
          className="rounded-full aspect-square object-cover mr-4 border-4"
        />
        <div className="text-sm text-gray-400">
          <div>Dmytrii Ivankevych</div>
          <div>2025.05.18</div>
        </div>
      </div>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sed
        commodi nisi deleniti! Delectus earum debitis consequuntur ratione est
        pariatur, dignissimos eaque facere iure nobis, vel, ipsa iste autem
        eveniet!
      </div>
    </div>
  );
};
