import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from "react";
import { clsx } from "clsx";
import {
  TransitFileUploadProps,
  UploadAudioProps,
  UploadImageProps,
} from "../PostForm.interface";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import PostFormPreviewImages from "./PostFormPreviewImages";
import PostFormPreviewAudios from "./PostFormPreviewAudios";

interface PostFormFilesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TransitFileUploadProps;
}

const PostFormFiles: FC<PostFormFilesProps> = (props) => {
  const { className, children, data, ...rest } = props;

  const images: UploadImageProps[] = useMemo(
    () => data.files.filter((item) => item.file.type.startsWith("image")),
    [data.files.length]
  );

  const audios: UploadAudioProps[] = useMemo(
    () => data.files.filter((item) => item.file.type.startsWith("audio")),
    [data.files.length]
  ) as UploadAudioProps[];

  return (
    <motion.div
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className={clsx(className, "flex flex-col overflow-hidden")}
    >
      <LayoutGroup>
        <AnimatePresence>
          {images.length > 0 && (
            <>
              <hr />
              <PostFormPreviewImages
                images={images}
                handleRemoveFile={data.handleRemoveFile}
              />
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {audios.length > 0 && (
            <>
              <hr />
              <PostFormPreviewAudios audios={audios} data={data} />
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

export default PostFormFiles;
