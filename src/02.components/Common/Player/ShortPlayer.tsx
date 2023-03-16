import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";
import { clsx } from "clsx";

interface ShortPlayerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ShortPlayer: FC<ShortPlayerProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div {...rest} className={clsx(className, "flex items-center gap-3")}>
      <IoPlayBack size={16} className="icon" />
      <IoPlay size={16} className="icon" />
      {/* <IoPause size={16} className="icon" /> */}
      <IoPlayForward size={16} className="icon" />
      <span className="text-slate-400">Автор - Название песни...</span>
    </div>
  );
};

export default ShortPlayer;
