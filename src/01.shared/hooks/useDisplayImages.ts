import { themeSlice } from "@/01.shared/store/reducers/theme/themeSlice";
import { useAppDispatch } from "@/01.shared/hooks/useRedux";
import { useEffect } from "react";
import { useAppSelector } from "./useRedux";
import { DisplayImagesEnum } from "../store/reducers/theme/theme.interface";

const useDisplayImages = () => {
  const displayImages = useAppSelector((state) => state.theme.displayImages);
  const { setDisplayImages } = themeSlice.actions;
  const dispatch = useAppDispatch();

  function handleDisplayImages() {
    const savedPrefs = localStorage.getItem("display-images");

    if (
      savedPrefs &&
      savedPrefs !== displayImages &&
      Object.values(DisplayImagesEnum).includes(savedPrefs as DisplayImagesEnum)
    ) {
      dispatch(setDisplayImages(savedPrefs as DisplayImagesEnum));
    }
  }

  useEffect(() => {
    handleDisplayImages();
  }, [displayImages]);
};

export default useDisplayImages;
