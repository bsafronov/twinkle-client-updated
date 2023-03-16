import Post from "./Post";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

interface PostListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const PostList: FC<PostListProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <ul {...rest} className={clsx(className, "flex flex-col gap-4")}>
      <Post />
      <Post />
    </ul>
  );
};

export default PostList;
