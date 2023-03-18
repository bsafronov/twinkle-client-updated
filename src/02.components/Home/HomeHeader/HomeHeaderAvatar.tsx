import UserAvatar from "@/02.components/Common/Avatar/UserAvatar";
import { FiCameraOff } from "react-icons/fi";

const HomeHeaderAvatar = () => {
  return (
    <div className="relative -mt-28 h-8 max-h-[8rem] min-h-[8rem] w-8 min-w-[8rem] max-w-[8rem] rounded-full ring-4 ring-white dark:ring-gray-800 sm:-mt-20">
      <UserAvatar />
      <span className="absolute bottom-4 right-2 flex h-4 w-4 rounded-full bg-green-500 ring-4 ring-white dark:ring-gray-800">
        <span className="relative h-4 w-4 animate-ping rounded-full bg-green-500 opacity-50"></span>
      </span>
    </div>
  );
};

export default HomeHeaderAvatar;
