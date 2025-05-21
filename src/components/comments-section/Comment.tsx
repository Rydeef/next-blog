import { Comment, User } from "@prisma/client";
import Image from "next/image";

interface Props extends Comment {
  user: User;
}

export const CommentCard = ({ user, createdAt, desc }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center">
        {user?.image ? (
          <Image
            src={user.image}
            alt="culture"
            height={48}
            width={48}
            className="rounded-full aspect-square object-cover mr-4 border-4"
          />
        ) : null}
        <div className="text-sm text-gray-400">
          <div>{user.name}</div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      <div className="mt-4">{desc}</div>
    </div>
  );
};
