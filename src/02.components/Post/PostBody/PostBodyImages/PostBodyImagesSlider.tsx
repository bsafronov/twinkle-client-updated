import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PostBodyImageProps } from "./PostBodyImages";

const PostBodyImagesSlider = ({ images }: PostBodyImageProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      className="w-full rounded-lg"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.path} alt="img" className="mx-auto w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PostBodyImagesSlider;
