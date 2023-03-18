import { useAppSelector } from "@/01.shared/hooks/useRedux";
import { DisplayImagesEnum } from "@/01.shared/store/reducers/theme/theme.interface";
import PostBodyImagesGrid from "./PostBodyImagesGrid";
import PostBodyImagesSlider from "./PostBodyImagesSlider";

export interface PostBodyImage {
  path: string;
}
export interface PostBodyImageProps {
  images: PostBodyImage[];
}

const PostBodyImages = () => {
  const displayImages = useAppSelector((state) => state.theme.displayImages);
  const images: PostBodyImage[] = [
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
    { path: "/images/cat.jpg" },
  ];

  return (
    <>
      {displayImages === DisplayImagesEnum.GRID ? (
        <PostBodyImagesGrid images={images} />
      ) : (
        <PostBodyImagesSlider images={images} />
      )}
    </>
  );
};

export default PostBodyImages;
