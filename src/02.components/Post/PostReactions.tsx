import { HiHeart } from "react-icons/hi";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { FC } from "react";
import { UseToggleProps } from "@/01.shared/hooks/useToggle";
import clsx from "clsx";

interface PostReactionsProps {
  commentList: UseToggleProps;
}
const PostReactions: FC<PostReactionsProps> = (props) => {
  const { commentList } = props;
  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1 items-center px-2 py-1 bg-slate-100 rounded-full hover:bg-slate-200 cursor-pointer group transition-colors">
        <HiHeart
          size={20}
          className="text-slate-400 transition-colors group-hover:text-red-500"
        />
        <span className="text-slate-400">10</span>
      </div>
      <div
        className="flex gap-1 items-center px-2 py-[0.327rem] bg-slate-100 rounded-full hover:bg-slate-200 cursor-pointer group transition-colors"
        onClick={commentList.toggle}
      >
        <HiChatBubbleLeft
          size={18}
          className={clsx(
            "text-slate-400 group-hover:text-slate-500 transition-colors",
            {
              "text-slate-500": commentList.value,
            }
          )}
        />
        <span className="text-slate-400">10</span>
      </div>
    </div>
  );
};

export default PostReactions;
