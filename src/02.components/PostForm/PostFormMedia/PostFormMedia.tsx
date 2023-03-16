import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import { TransitFileUploadProps } from "../PostForm.interface";
import PostFormMediaImage from "./PostFormMediaImage";
import PostFormMediaAudio from "./PostFormMediaAudio";
import { motion } from "framer-motion";
interface PostFormMediaProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TransitFileUploadProps;
}

const PostFormMedia: FC<PostFormMediaProps> = (props) => {
  const { className, data } = props;

  return (
    <motion.div
      className={clsx(className, "")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PostFormMediaImage {...data} />
      <PostFormMediaAudio {...data} />
    </motion.div>
  );
};

export default PostFormMedia;
