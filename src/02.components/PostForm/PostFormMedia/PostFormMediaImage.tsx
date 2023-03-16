import { FC } from "react";
import { HiCamera } from "react-icons/hi";
import {
  TransitFileUploadProps,
  UploadImageProps,
} from "../PostForm.interface";

const PostFormMediaImage: FC<TransitFileUploadProps> = (data) => {
  function handleInsertImage(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = e.target.files as FileList;
    const fileList = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileData: UploadImageProps = {
        file: selectedFiles[i],
        id: Date.now() + i,
      };
      fileList.push(fileData);
    }
    e.target.value = "";
    data.handleAddMultipleFiles(fileList);
  }

  return (
    <>
      <label htmlFor="image_input">
        <HiCamera size={20} className="icon" />
      </label>
      <input
        type="file"
        accept="image/*"
        id="image_input"
        className="hidden"
        multiple
        onChange={handleInsertImage}
      />
    </>
  );
};

export default PostFormMediaImage;
