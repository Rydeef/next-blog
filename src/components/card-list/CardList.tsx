import React from "react";
import Pagination from "../pagination/Pagination";
import { Card } from "./Card";
import { Post } from "@prisma/client";

interface Props {
  page: number;
  cat?: string;
}

const getData = async (page: number, cat?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page, cat }: Props) => {
  const { posts, count } = await getData(page, cat);

  return (
    <div className="flex-5">
      {posts.length ? <h1>Recent posts</h1> : <h1>No posts for {cat} category</h1>}
      {posts.map((post: Post) => (
        <div className="my-8" key={post.id}>
          <Card {...post} />
        </div>
      ))}

      <Pagination page={page} count={count} cat={cat} />
    </div>
  );
};

export default CardList;
