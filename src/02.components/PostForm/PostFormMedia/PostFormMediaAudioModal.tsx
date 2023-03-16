import { useInput } from "@/01.shared/hooks/useInput";
import { FC } from "react";
import {
  PostFormMediaAudioModalProps,
  UploadAudioProps,
} from "../PostForm.interface";
import { motion } from "framer-motion";

const PostFormMediaAudioModal: FC<PostFormMediaAudioModalProps> = (props) => {
  const { selectedFile, data, isModal } = props;
  const author = useInput("");
  const songName = useInput("");

  function checkIsNotValid() {
    return !(!!author.value && !!songName.value && !!selectedFile);
  }
  function handleInsertAudio() {
    const file: UploadAudioProps = {
      file: selectedFile as File,
      id: Date.now(),
      author: author.value,
      title: songName.value,
    };
    data.handleAddFile(file);
    isModal.toggle();
  }

  return (
    <motion.div
      className="flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 backdrop-blur-md backdrop-brightness-75 z-[2000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={isModal.toggle}
    >
      <motion.div
        className="card flex flex-col"
        initial={{ scale: 0, rotate: 25 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="box flex flex-col gap-4">
          <div>
            <h5 className="text-slate-700">Исполнитель:</h5>
            <input type="text" className="input" {...author} />
          </div>
          <div>
            <h5 className="text-slate-700">Название песни:</h5>
            <input type="text" className="input" {...songName} />
          </div>
          <label htmlFor="audio_input">
            <span className="btn-secondary py-1 px-2 rounded-lg block text-center cursor-pointer transition-colors">
              Выберите аудио
            </span>
          </label>
          {selectedFile && <span>{selectedFile.name}</span>}
        </div>
        <hr />
        <div className="box flex justify-between bg-slate-100">
          <button className="btn-danger" onClick={isModal.toggle}>
            Отмена
          </button>
          <button
            className="btn-primary"
            disabled={checkIsNotValid()}
            onClick={handleInsertAudio}
          >
            Добавить
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PostFormMediaAudioModal;
