import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import PostFormMedia from "./PostFormMedia/PostFormMedia";
import { TransitFileUploadProps } from "./PostForm.interface";
import { motion } from "framer-motion";

interface PostFormMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TransitFileUploadProps;
}

const PostFormMenu: FC<PostFormMenuProps> = (props) => {
  const { className, data } = props;

  function handleUpload() {
    const formData = new FormData();
    formData.append("file", data.files[0].file, data.files[0].file.name);
    console.log(formData.entries());
  }

  return (
    <motion.div
      className={clsx(className, "overflow-hidden")}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
    >
      <hr />
      <div className="box flex justify-between">
        <PostFormMedia data={data} className="flex items-center gap-2" />
        <motion.button
          className="btn-primary"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          onClick={handleUpload}
        >
          Опубликовать
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PostFormMenu;
