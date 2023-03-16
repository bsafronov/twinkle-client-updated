import { FC, useRef, ChangeEvent, useMemo, useState } from "react";
import {
  PostFormMediaAudioModalProps,
  TransitFileUploadProps,
} from "../PostForm.interface";
import { useToggle } from "@/01.shared/hooks/useToggle";
import { HiMusicNote } from "react-icons/hi";
import PostFormMediaAudioModal from "./PostFormMediaAudioModal";
import { AnimatePresence } from "framer-motion";
const PostFormMediaAudio: FC<TransitFileUploadProps> = (data) => {
  const audioRef = useRef<HTMLInputElement>(null);
  const isModal = useToggle(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const modalData = useMemo(() => {
    const current: PostFormMediaAudioModalProps = {
      data,
      isModal,
      selectedFile,
    };
    return current;
  }, [selectedFile, isModal.value]);

  function handleAddFile(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files as FileList;
    if (!selectedFile.length) return;

    setSelectedFile(selectedFile[0]);
    e.target.value = "";
  }

  return (
    <>
      <HiMusicNote size={18} className="icon" onClick={isModal.toggle} />
      <input
        ref={audioRef}
        type="file"
        accept="audio/*"
        id="audio_input"
        className="hidden"
        onChange={handleAddFile}
      />
      <AnimatePresence>
        {isModal.value && <PostFormMediaAudioModal {...modalData} />}
      </AnimatePresence>
    </>
  );
};

export default PostFormMediaAudio;
