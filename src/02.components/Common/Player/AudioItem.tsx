import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import { HiPlay } from "react-icons/hi";
import { UploadAudioProps } from "@/02.components/PostForm/PostForm.interface";

interface AudioItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  audio: UploadAudioProps;
}

const AudioItem: FC<AudioItemProps> = (props) => {
  const { className, children, audio, ...rest } = props;

  return (
    <div {...rest} className={clsx(className, "flex items-center gap-2")}>
      <HiPlay
        size={32}
        className="cursor-pointer text-blue-500 transition-colors hover:text-blue-600"
      />
      {/* <HiPause
            size={32}
            className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors"
          /> */}
      <div className="flex flex-col">
        <span>{audio.title}</span>
        <span className="text-slate-300 dark:text-slate-500">
          {audio.author}
        </span>
      </div>
    </div>
  );
};

export default AudioItem;
