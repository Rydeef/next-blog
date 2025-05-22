import { Button } from "@/shared/button/Button";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const Card = (post: Post) => {
  return (
    <div className="flex">
      {post.img ? (
        <div className="size-64 relative mr-4">
          <Image src={post.img} alt="postimage" fill />
        </div>
      ) : null}
      <div className="flex flex-col justify-between flex-1/3">
        <div className="text-sm">
          {new Date(post.createdAt).toLocaleDateString()} -{" "}
          <span className="text-purple-400">{post.catSlug?.toUpperCase()}</span>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{post.title}</h3>
        </div>
        <div>
          <Button variant="link">
            <Link href={`/posts/${post.id}`}>Read more...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
