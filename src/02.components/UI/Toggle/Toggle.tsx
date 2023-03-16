import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: boolean;
  toggle: () => void;
}

const Toggle: FC<ToggleProps> = (props) => {
  const { className, value, toggle, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "rounded-xl border border-slate-200 w-[28px] h-[16px] flex items-center p-[1px]"
      )}
      onClick={toggle}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: value ? "100%" : 0 }}
        className={clsx("rounded-full w-[12px] h-[12px]", {
          "bg-slate-300": !value,
          "bg-blue-500": value,
        })}
      ></motion.div>
    </div>
  );
};

export default Toggle;
