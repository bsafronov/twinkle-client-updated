import clsx from "clsx";
import { useMemo } from "react";

const PostBodyImages = () => {
  const images = [
    "/images/cat.jpg",
    "/images/cat.jpg",
    "/images/cat.jpg",
    // "/images/cat.jpg",
    // "/images/cat.jpg",
    // "/images/cat.jpg",
    // "/images/cat.jpg",
    // "/images/cat.jpg",
    // "/images/cat.jpg",
  ];

  const classNames = useMemo(() => calculateGrid(), [images.length]);

  function calculateGrid() {
    const cls = {
      cols: "",
      mainSpan: "",
      addSpan: "",
    };

    switch (images.length) {
      case 1:
        break;
      case 2:
      case 4:
        cls.cols = "grid-cols-2";
        break;
      case 3:
        cls.cols = "grid-cols-2";
        cls.mainSpan = "first:col-span-2";
        break;
      case 5:
        cls.cols = "grid-cols-6";
        cls.mainSpan = "col-span-3";
        cls.addSpan = "col-span-2";
        break;
      case 6:
        cls.cols = "grid-cols-4";
        cls.mainSpan = "col-span-2";
        break;
      case 7:
        cls.cols = "grid-cols-10";
        cls.mainSpan = "col-span-5";
        cls.addSpan = "col-span-2";
        break;
      case 8:
        cls.cols = "grid-cols-6";
        cls.mainSpan = "col-span-3";
        break;
      case 9:
        cls.cols = "grid-cols-3";
        break;
    }

    return cls;
  }

  return (
    <ul
      className={clsx("rounded-lg overflow-hidden grid gap-1", classNames.cols)}
    >
      {images.map((item, index) => (
        <li
          key={index}
          className={clsx({
            [classNames.mainSpan]: index === 0 || index === 1,
            [classNames.addSpan]: index !== 0 && index !== 1,
          })}
        >
          <img src={item} className="object-cover w-full h-full" />
        </li>
      ))}
    </ul>
  );
};

export default PostBodyImages;
