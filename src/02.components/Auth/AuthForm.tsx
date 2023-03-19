import { useAppDispatch } from "@/01.shared/hooks/useRedux";
import { userSlice } from "@/01.shared/store/reducers/user/userSlice";
import clsx from "clsx";
import { HiOutlineLogin } from "react-icons/hi";
import { useState } from "react";
import useWindowDimensions from "@/01.shared/hooks/useDeviceSize";
import { AnimatePresence, motion } from "framer-motion";
import AuthDesktopForm from "./AuthDesktopForm";
import AuthMobileForm from "./AuthMobileForm";

export interface AuthProps {
  handleLogin: () => void;
}

const AuthForm = () => {
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  function handleLogin() {
    dispatch(login());
  }

  return (
    <>
      {width <= 768 && (
        <div
          className="dark:hover:bg-bg-gray-600 group fixed bottom-4 left-1/2 z-[1001] flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <HiOutlineLogin className="h-3/5 w-3/5 translate-x-[2px] text-slate-500 transition-colors group-hover:text-slate-600 dark:text-gray-400 dark:group-hover:text-gray-300" />
        </div>
      )}
      {width >= 768 && <AuthDesktopForm handleLogin={handleLogin} />}
      <AnimatePresence>
        {width < 768 && isOpen && <AuthMobileForm handleLogin={handleLogin} />}
      </AnimatePresence>
    </>
  );
};

export default AuthForm;
