import { HiBell } from "react-icons/hi";
import HeaderInput from "./HeaderInput";
import HeaderTitle from "./HeaderTitle";
import { HiChevronDown } from "react-icons/hi";
import ShortPlayer from "../Player/ShortPlayer";
const Header = () => {
  return (
    <div className="hidden lg:block fixed py-2 w-full border border-b-slate-200 bg-white z-[1000]">
      <div className="container mx-auto flex items-center px-4">
        <HeaderTitle />
        <div className="flex justify-between flex-grow">
          <div className="flex gap-8 items-center">
            <HeaderInput />
            <HiBell size={20} className="icon" />
            <ShortPlayer className="hidden lg:flex" />
          </div>
          <button className="flex items-center gap-2 hover:bg-slate-100 group">
            <div className="rounded-full w-8 h-8 bg-orange-500 "></div>
            <HiChevronDown
              size={16}
              className="icon group-hover:text-slate-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
