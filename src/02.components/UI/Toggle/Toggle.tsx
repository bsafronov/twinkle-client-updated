import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface ToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: boolean;
  toggle?: () => void;
}

const Toggle: FC<ToggleProps> = (props) => {
  const { className, value, toggle, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "flex h-[16px] w-[28px] items-center rounded-xl border border-slate-200 p-[1px] dark:border-gray-600"
      )}
      onClick={toggle}
    >
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: value ? "100%" : 0 }}
          className={clsx("h-[12px] w-[12px] rounded-full", {
            "bg-slate-300 dark:bg-gray-600": !value,
            "bg-blue-500": value,
          })}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Toggle;
