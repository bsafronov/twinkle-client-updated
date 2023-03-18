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
    <div className="flex items-center gap-2">
      <div className="group flex cursor-pointer items-center gap-1 rounded-full bg-slate-100 px-2 py-1 transition-colors hover:bg-slate-200 dark:bg-slate-700">
        <HiHeart
          size={20}
          className="text-slate-400 transition-colors group-hover:text-red-500"
        />
        <span className="text-slate-400">10</span>
      </div>
      <div
        className="group flex cursor-pointer items-center gap-1 rounded-full bg-slate-100 px-2 py-[0.327rem] transition-colors hover:bg-slate-200 dark:bg-slate-700"
        onClick={commentList.toggle}
      >
        <HiChatBubbleLeft
          size={18}
          className={clsx(
            "text-slate-400 transition-colors group-hover:text-slate-500 dark:group-hover:text-slate-300",
            {
              "text-slate-500 dark:text-slate-300": commentList.value,
            }
          )}
        />
        <span className="text-slate-400">10</span>
      </div>
    </div>
  );
};

export default PostReactions;
