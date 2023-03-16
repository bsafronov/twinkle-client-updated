import PostComment from "./PostComment";
import { motion } from "framer-motion";

const PostCommentList = () => {
  return (
    <motion.ul
      className="overflow-hidden"
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
    >
      <div className="box flex flex-col gap-4 overflow-hidden">
        <PostComment />
        <PostComment />
      </div>
    </motion.ul>
  );
};

export default PostCommentList;
