import { Textarea } from "@/shared/textarea/Textarea";
import { Comment } from "./Comment";
import { Button } from "@/shared/button/Button";

const CommentsSection = () => {
  return (
    <div className="mt-8">
      <Textarea placeholder="Write a comment..." />
      <Button>Send</Button>
      <div className="space-y-12 mt-4">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};
export default CommentsSection;
