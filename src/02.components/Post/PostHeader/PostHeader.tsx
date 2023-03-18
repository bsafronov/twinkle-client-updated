import { useToggle } from "@/01.shared/hooks/useToggle";
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PostModal from "./PostModal";
import { AnimatePresence } from "framer-motion";

const PostHeader = () => {
  const isOptions = useToggle(false);
  const isComments = useToggle(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="min-h-[3rem] min-w-[3rem] rounded-full bg-slate-300"></div>
        <div className="flex flex-col">
          <Link
            href="#"
            className="text-[12px] font-semibold text-blue-500 hover:underline"
          >
            Богдан Сафронов
          </Link>
          <span className="text-[12px] text-slate-400">7 марта 2023</span>
        </div>
      </div>
      <div className="relative">
        <HiOutlineDotsHorizontal
          size={20}
          className="icon select-none"
          onClick={isOptions.toggle}
        />
        <AnimatePresence>
          {isOptions.value && <PostModal {...isComments} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PostHeader;
