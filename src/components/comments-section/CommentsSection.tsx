"use client";
import { Textarea } from "@/shared/textarea/Textarea";
import { CommentCard } from "./Comment";
import { Button } from "@/shared/button/Button";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";
import { Comment, User } from "@prisma/client";
import Link from "next/link";

interface Props {
  postId: string;
}

interface CommentWithUser extends Comment {
  user: User;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const CommentsSection = ({ postId }: Props) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate } = useSWR(
    `https://next-blog-pkle.vercel.app/api/comments?postId=${postId}`,
    fetcher
  );

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postId }),
    });
    mutate();

    setDesc("");
  };

  return (
    <div className="mt-8">
      {status === "authenticated" ? (
        <>
          <Textarea
            onChange={handleChangeComment}
            placeholder="Write a comment..."
          />
          <Button onClick={handleSubmit}>Send</Button>
        </>
      ) : (
        <Link href="/login">
          <Button>Login to write a comment</Button>
        </Link>
      )}
      <div className="space-y-12 mt-4">
        {data?.length ? (
          data?.map((comment: CommentWithUser) => (
            <CommentCard {...comment} key={comment.id} />
          ))
        ) : (
          <div className="flex justify-center w-full">
            No comments. Be first!
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentsSection;
