import { Button } from "@/shared/button/Button";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className="flex">
      <div className="size-64 relative">
        <Image src="/culture.png" alt="postimage" fill />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-1/3">
        <div className="text-sm">
          2025.05.18 - <span className="text-purple-400">CULTURE</span>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
            beatae rem laborum adipisci fugiat ex reprehenderit, dolor numquam
            cumque deleniti dignissimos omnis distinctio.
          </p>
        </div>
        <div>
          <Button variant="link">
            <Link href="/">Read more...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
