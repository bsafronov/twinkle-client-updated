import { useToggle } from "@/01.shared/hooks/useToggle";
import PostBody from "./PostBody/PostBody";
import PostCommentForm from "./PostComment/PostCommentForm";
import PostCommentList from "./PostComment/PostCommentList";
import PostHeader from "./PostHeader/PostHeader";
import PostReactions from "./PostReactions";
import { AnimatePresence } from "framer-motion";
const Post = () => {
  const isCommentList = useToggle(false);

  return (
    <li className="card">
      <div className="box flex flex-col gap-4">
        <PostHeader />
        <PostBody />
        <PostReactions commentList={isCommentList} />
      </div>
      <AnimatePresence>
        {isCommentList.value && (
          <>
            <hr />
            <PostCommentList />
          </>
        )}
      </AnimatePresence>
      <hr />
      <PostCommentForm />
    </li>
  );
};

export default Post;
