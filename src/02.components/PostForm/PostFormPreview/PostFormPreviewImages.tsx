import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import PostFormPreviewImageItem from "./PostFormPreviewImageItem";
import { UploadImageProps } from "../PostForm.interface";
import { AnimatePresence, motion } from "framer-motion";

interface PostFormPreviewImagesProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  images: UploadImageProps[];
  handleRemoveFile: (id: number) => void;
}

const PostFormPreviewImages: FC<PostFormPreviewImagesProps> = (props) => {
  const { className, images, handleRemoveFile } = props;

  return (
    <motion.ul
      exit={{
        height: 0,
        opacity: 0,
        padding: 0,
        gap: 0,
      }}
      className={clsx(className, "box grid grid-cols-4 gap-2 overflow-hidden")}
    >
      <AnimatePresence>
        {images.map((item) => (
          <PostFormPreviewImageItem
            key={item.id}
            image={item}
            handleRemoveFile={handleRemoveFile}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default PostFormPreviewImages;
