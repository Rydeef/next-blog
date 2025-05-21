import { Post, User } from "@prisma/client";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts?popular=1&page=1`);

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

interface PopularPost extends Post {
  user: User;
}

export const Popular = async () => {
  const { posts } = await getData();

  return (
    <div className="space-y-8 my-4">
      {posts.map((post: PopularPost) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <span className="bg-purple-400 px-2 rounded-xl text-sm">
              {post.catSlug.toUpperCase()}
            </span>
            <div className="mt-2">{post.title}</div>
            <div className="text-sm mt-1">
              {post.user.name} -{" "}
              <span className="text-gray-400">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
