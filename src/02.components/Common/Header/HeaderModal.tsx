import useSettings from "@/01.shared/hooks/useSettings";
import {
  DisplayImagesEnum,
  ThemeEnum,
} from "@/01.shared/store/reducers/theme/theme.interface";
import Toggle from "@/02.components/UI/Toggle/Toggle";
import { IoExitOutline } from "react-icons/io5";

const HeaderModal = () => {
  const {
    isAuth,
    displayImages,
    handleLogout,
    handleToggleDisplayImages,
    handleToggleTheme,
    theme,
  } = useSettings();

  return (
    <ul className="modal-box font-medium" onClick={(e) => e.stopPropagation()}>
      <li className="modal-option" onClick={handleToggleTheme}>
        <span>Тёмная тема</span>
        <Toggle value={theme === ThemeEnum.DARK} />
      </li>
      <li className="modal-option" onClick={handleToggleDisplayImages}>
        <span>Сетка картинок</span>
        <Toggle value={displayImages === DisplayImagesEnum.GRID} />
      </li>
      {isAuth && (
        <li className="modal-option text-red-500" onClick={handleLogout}>
          <span>Выйти</span>
          <IoExitOutline size={20} />
        </li>
      )}
    </ul>
  );
};

export default HeaderModal;
