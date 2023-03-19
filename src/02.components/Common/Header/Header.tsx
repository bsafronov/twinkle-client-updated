import { HiBell } from "react-icons/hi";
import HeaderInput from "./HeaderInput";
import HeaderTitle from "./HeaderTitle";
import { HiChevronDown } from "react-icons/hi";
import ShortPlayer from "../Player/ShortPlayer";
import { useToggle } from "@/01.shared/hooks/useToggle";
import HeaderModal from "./HeaderModal";
import { userSlice } from "@/01.shared/store/reducers/user/userSlice";
import { useAppSelector } from "@/01.shared/hooks/useRedux";
const Header = () => {
  const isModal = useToggle(false);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return (
    <div className="dark:border- fixed z-[1000] hidden w-full border-b border-b-slate-200 bg-white py-2 dark:border-b-gray-700 dark:bg-gray-800 lg:block">
      <div className="container mx-auto flex items-center px-4">
        <HeaderTitle />
        <div className="flex flex-grow justify-between">
          <div className="flex items-center gap-8">
            <HeaderInput />

            {isAuth && (
              <>
                <HiBell size={20} className="icon" />
                <ShortPlayer className="hidden lg:flex" />
              </>
            )}
          </div>
          <button
            className="group hov-color relative flex items-center gap-2"
            onClick={isModal.toggle}
          >
            <div className="h-8 w-8 rounded-full bg-orange-500 "></div>
            <HiChevronDown size={16} className="icon group-hov-color" />
            {isModal.value && <HeaderModal />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
