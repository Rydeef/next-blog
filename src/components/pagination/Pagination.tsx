"use client";
import { Button } from "@/shared/button/Button";
import { useRouter } from "next/navigation";
import React from "react";

const POSTS_PER_PAGE = 4;

interface Props {
  page: number;
  count: number;
  cat?: string;
}

const Pagination = ({ page, count, cat }: Props) => {
  const router = useRouter();

  const hasPrevPage = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNextPage = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  const nextPage = () => {
    let pushString = `?page=${page + 1}`;
    if (cat) {
      pushString = `?cat=${cat}&page=${page + 1}`;
    }

    router.push(pushString);
  };

  const prevPage = () => {
    let pushString = `?page=${page - 1}`;
    if (cat) {
      pushString = `?cat=${cat}&page=${page - 1}`;
    }

    router.push(pushString);
  };

  return (
    <div className="flex justify-between">
      {hasPrevPage ? <Button onClick={prevPage}>Previous</Button> : <div></div>}
      {hasNextPage ? <Button onClick={nextPage}>Next</Button> : <div></div>}
    </div>
  );
};

export default Pagination;
