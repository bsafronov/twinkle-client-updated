import { useAppDispatch, useAppSelector } from "@/01.shared/hooks/useRedux";
import {
  DisplayImagesEnum,
  ThemeEnum,
} from "@/01.shared/store/reducers/theme/theme.interface";
import { themeSlice } from "@/01.shared/store/reducers/theme/themeSlice";
import Toggle from "@/02.components/UI/Toggle/Toggle";
import { IoExitOutline } from "react-icons/io5";

const HeaderModal = () => {
  const { theme, displayImages } = useAppSelector((state) => state.theme);
  const { setTheme, setDisplayImages } = themeSlice.actions;
  const dispatch = useAppDispatch();

  function handleToggleTheme() {
    if (theme === ThemeEnum.LIGHT) {
      dispatch(setTheme(ThemeEnum.DARK));
    } else {
      dispatch(setTheme(ThemeEnum.LIGHT));
    }
  }

  function handleToggleDisplayImages() {
    if (displayImages === DisplayImagesEnum.GRID) {
      dispatch(setDisplayImages(DisplayImagesEnum.SLIDER));
    } else {
      dispatch(setDisplayImages(DisplayImagesEnum.GRID));
    }
  }

  return (
    <ul className="modal-box" onClick={(e) => e.stopPropagation()}>
      <li className="modal-option" onClick={handleToggleTheme}>
        <span>Тёмная тема</span>
        <Toggle value={theme === ThemeEnum.DARK} />
      </li>
      <li className="modal-option" onClick={handleToggleDisplayImages}>
        <span>Сетка картинок</span>
        <Toggle value={displayImages === DisplayImagesEnum.GRID} />
      </li>
      <li className="modal-option text-red-500">
        <span>Выйти</span>
        <IoExitOutline size={20} />
      </li>
    </ul>
  );
};

export default HeaderModal;
