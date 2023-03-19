import useSettings from "@/01.shared/hooks/useSettings";
import {
  DisplayImagesEnum,
  ThemeEnum,
} from "@/01.shared/store/reducers/theme/theme.interface";
import Toggle from "@/02.components/UI/Toggle/Toggle";
import { motion } from "framer-motion";
import { IoExitOutline } from "react-icons/io5";

const NavbarMobileSettings = () => {
  const {
    displayImages,
    handleLogout,
    handleToggleDisplayImages,
    handleToggleTheme,
    isAuth,
    theme,
  } = useSettings();
  return (
    <motion.ul
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="grid grid-cols-2 overflow-hidden border-b border-b-slate-200 dark:border-b-gray-700"
    >
      <li
        className="flex cursor-pointer select-none items-center justify-between gap-2 px-2 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-gray-700"
        onClick={handleToggleTheme}
      >
        <span>Тёмная тема</span>
        <Toggle value={theme === ThemeEnum.DARK} />
      </li>
      <li
        className="flex cursor-pointer select-none items-center justify-between gap-2 px-2 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-gray-700"
        onClick={handleToggleDisplayImages}
      >
        <span>Сетка картинок</span>
        <Toggle value={displayImages === DisplayImagesEnum.GRID} />
      </li>
      {isAuth && (
        <li
          className="col-start-2 flex cursor-pointer select-none items-center justify-end gap-2 px-2 py-2 text-red-500 transition-colors hover:bg-slate-100 dark:hover:bg-gray-700"
          onClick={handleLogout}
        >
          <span>Выйти</span>
          <IoExitOutline size={20} />
        </li>
      )}
    </motion.ul>
  );
};

export default NavbarMobileSettings;
