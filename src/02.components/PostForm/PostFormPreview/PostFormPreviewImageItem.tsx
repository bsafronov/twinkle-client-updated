import { DetailedHTMLProps, FC, LiHTMLAttributes, useMemo } from "react";
import { clsx } from "clsx";
import { AiFillCloseCircle } from "react-icons/ai";
import { UploadImageProps } from "../PostForm.interface";
import { motion } from "framer-motion";
interface PostFormPreviewImageItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  image: UploadImageProps;
  handleRemoveFile: (id: number) => void;
}

const PostFormPreviewImageItem: FC<PostFormPreviewImageItemProps> = (props) => {
  const { className, image, handleRemoveFile } = props;

  const thumb = useMemo(() => URL.createObjectURL(image.file), [image]);

  return (
    <motion.li
      layout
      key={image.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0 }}
      className={clsx(className, "group relative")}
    >
      <div className="relative flex aspect-square justify-center overflow-hidden">
        <img
          src={thumb}
          alt="thumb-bg"
          className="absolute z-[0] h-full w-full blur-md"
        />
        <img src={thumb} alt="thumb" className="relative z-10 object-contain" />
      </div>
      <AiFillCloseCircle
        size={16}
        className="absolute -top-2 -right-2 z-[11] cursor-pointer rounded-full bg-white text-slate-400 opacity-0 transition-all hover:text-slate-500 group-hover:opacity-100"
        onClick={() => handleRemoveFile(image.id)}
      />
    </motion.li>
  );
};

export default PostFormPreviewImageItem;
