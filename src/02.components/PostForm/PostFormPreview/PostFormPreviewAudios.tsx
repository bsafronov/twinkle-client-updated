import AudioItem from "@/02.components/Common/Player/AudioItem";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  TransitFileUploadProps,
  UploadAudioProps,
} from "../PostForm.interface";

interface PostFormPreviewAudiosProps {
  audios: UploadAudioProps[];
  data: TransitFileUploadProps;
}

const PostFormPreviewAudios: FC<PostFormPreviewAudiosProps> = (props) => {
  const { audios, data } = props;

  return (
    <motion.ul className="box overflow-hidden" exit={{ height: 0, padding: 0 }}>
      <AnimatePresence>
        {audios.map((item) => (
          <motion.li
            layout
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{
              opacity: 0,
              x: -200,
              height: 0,
              margin: 0,
            }}
            key={item.id}
            className="group mb-2 flex items-center justify-between overflow-hidden last:mb-0"
          >
            <AudioItem audio={item} />

            <HiOutlineXMark
              size={16}
              strokeWidth={2}
              className="icon hidden group-hover:block"
              onClick={() => data.handleRemoveFile(item.id)}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default PostFormPreviewAudios;
