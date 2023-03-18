import { useToggle } from "@/01.shared/hooks/useToggle";
import { FiCameraOff } from "react-icons/fi";
import { useState } from "react";

const UserAvatar = () => {
  const [isAvatar, setAvatar] = useState(true);

  return (
    <>
      {isAvatar ? (
        <img
          src="images/cat.jpg"
          alt=""
          className="aspect-square rounded-full object-cover"
        />
      ) : (
        <div className="h-full w-full rounded-full bg-slate-200">
          <FiCameraOff className="top-1/2 left-1/2 h-1/2 w-1/2 translate-x-1/2 translate-y-1/2 text-gray-400" />
        </div>
      )}
    </>
  );
};

export default UserAvatar;
