import UserAvatar from "@/02.components/Common/Avatar/UserAvatar";
import Textarea from "@/02.components/UI/Textarea/Textarea";
import { IoSend } from "react-icons/io5";

const PostCommentForm = () => {
  return (
    <div className="box flex items-start gap-4">
      <div className="h-2 min-h-[2rem] w-2 min-w-[2rem] rounded-full ring-1 ring-slate-200 dark:ring-gray-700">
        <UserAvatar />
      </div>
      <div className="flex-grow rounded-lg border border-slate-200 px-2 py-1 dark:border-gray-700">
        <Textarea placeholder="Написать комментарий..." />
      </div>
      <IoSend
        size={20}
        className="translate-y-1 cursor-pointer text-slate-300 transition-colors hover:text-blue-500 dark:text-slate-600 dark:hover:text-blue-500"
      />
    </div>
  );
};

export default PostCommentForm;
