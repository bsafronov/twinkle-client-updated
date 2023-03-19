import { useToggle } from "@/01.shared/hooks/useToggle";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { IoSettings } from "react-icons/io5";
import ShortPlayer from "../../Player/ShortPlayer";
import NavbarMobileNotifications from "./NavbarMobileNotifications";
import NavbarMobilePages from "./NavbarMobilePages";
import NavbarMobileSettings from "./NavbarMobileSettings";

const NavbarMobile = () => {
  const isSettings = useToggle(false);

  return (
    <div className="fixed bottom-4 left-1/2 z-[1000] -translate-x-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <AnimatePresence>
        {isSettings.value && <NavbarMobileSettings />}
      </AnimatePresence>
      <ShortPlayer className="w-full border-b border-b-slate-200 px-4 py-2 dark:border-b-gray-700" />
      <ul className="flex justify-center gap-4 py-2 px-4">
        <li className="flex items-center">
          <NavbarMobilePages />
        </li>
        <li className="flex items-center">
          <NavbarMobileNotifications />
        </li>
        <li className="flex items-center">
          <IoSettings
            size={18}
            className={clsx("icon", {
              "text-slate-500 hover:text-slate-600 dark:text-gray-300 dark:hover:text-gray-200":
                isSettings.value,
            })}
            onClick={isSettings.toggle}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
