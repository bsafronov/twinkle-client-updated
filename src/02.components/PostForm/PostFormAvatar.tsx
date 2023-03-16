import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

interface PostFormAvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const PostFormAvatar: FC<PostFormAvatarProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "absolute top-2 left-4 rounded-full min-h-[2rem] min-w-[2rem] bg-slate-200"
      )}
    >
      {children}
    </div>
  );
};

export default PostFormAvatar;
