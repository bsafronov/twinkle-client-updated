import Textarea from "@/02.components/UI/Textarea/Textarea";
import { IoSend } from "react-icons/io5";

const PostCommentForm = () => {
  return (
    <div className="box flex gap-4 items-start">
      <div className="rounded-full min-w-[2rem] min-h-[2rem] bg-slate-200"></div>
      <div className="border border-slate-200 px-2 py-1 rounded-lg flex-grow">
        <Textarea placeholder="Написать комментарий..." />
      </div>
      <IoSend
        size={20}
        className="translate-y-1 text-slate-300 hover:text-blue-500 transition-colors cursor-pointer"
      />
    </div>
  );
};

export default PostCommentForm;
