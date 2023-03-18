import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import UserAvatar from "../Common/Avatar/UserAvatar";

interface PostFormAvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const PostFormAvatar: FC<PostFormAvatarProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "absolute top-2 left-4 h-2 min-h-[2rem] w-2 min-w-[2rem] rounded-full ring-1 ring-slate-200 dark:ring-gray-700"
      )}
    >
      <UserAvatar />
    </div>
  );
};

export default PostFormAvatar;
