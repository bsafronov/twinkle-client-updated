import { useInput } from "@/01.shared/hooks/useInput";
import Textarea from "../UI/Textarea/Textarea";
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from "react";
import { clsx } from "clsx";
import PostFormAvatar from "./PostFormAvatar";
import PostFormMenu from "./PostFormMenu";
import PostFormMedia from "./PostFormMedia/PostFormMedia";
import PostFormFiles from "./PostFormPreview/PostFormFiles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  TransitFileUploadProps,
  UploadAudioProps,
  UploadImageProps,
} from "./PostForm.interface";

interface PostFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const PostForm: FC<PostFormProps> = (props) => {
  const { className, children, ...rest } = props;
  const input = useInput("");
  const [files, setFiles] = useState<(UploadImageProps | UploadAudioProps)[]>(
    []
  );

  const data: TransitFileUploadProps = useMemo(
    () => ({
      handleAddFile,
      handleAddMultipleFiles,
      handleRemoveFile,
      files,
      text: input.value,
    }),
    [files.length]
  );

  const isNotEmpty = useMemo(
    () => !!files.length || !!input.value,
    [input.value, files.length]
  );

  function handleAddFile(file: UploadImageProps | UploadAudioProps) {
    setFiles([...files, file]);
  }

  function handleAddMultipleFiles(
    fileList: UploadImageProps[] | UploadAudioProps[]
  ) {
    setFiles([...files, ...fileList]);
  }

  function handleRemoveFile(id: number) {
    const newImagesList = files.filter((item) => item.id !== id);
    setFiles(newImagesList);
  }

  return (
    <div className={clsx(className, "card flex flex-col")}>
      <div className="box relative flex items-start gap-2">
        <PostFormAvatar />
        <Textarea
          placeholder="Что у вас нового?"
          className="ml-11"
          {...input}
        />
        {!isNotEmpty && (
          <PostFormMedia
            data={data}
            className="absolute right-4 top-5 -mt-2 flex items-center gap-2"
          />
        )}
      </div>
      <AnimatePresence>
        {files.length > 0 && <PostFormFiles data={data} />}
      </AnimatePresence>
      <AnimatePresence>
        {isNotEmpty && <PostFormMenu data={data} />}
      </AnimatePresence>
    </div>
  );
};

export default PostForm;
