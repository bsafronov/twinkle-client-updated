import { useState } from "react";

const HomeInfoLinks = () => {
  const homeLinks = [
    { desc: "Подписки", value: 10, href: "/" },
    { desc: "Группы", value: 8, href: "/" },
    { desc: "Подписчики", value: 12, href: "/" },
    { desc: "Музыка", value: 165, href: "/" },
    { desc: "Фото", value: 20, href: "/" },
    { desc: "Видео", value: 20, href: "/" },
  ];

  const [hoveringItem, setHoveringItem] = useState<string>("");

  return (
    <ul
      className="grid grid-cols-3 md:grid-cols-2 gap-1 box border-t border-t-slate-100"
      onMouseLeave={() => setHoveringItem("")}
    >
      {homeLinks.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoveringItem(item.desc)}
          className="group relative hover:bg-slate-100 transition-colors flex flex-col px-2 items-center rounded-lg cursor-pointer"
        >
          <span className="relative z-10 group-hover:text-slate-500 text-slate-400 font-semibold transition-colors">
            {item.desc}
          </span>
          <span className="relative z-10 text-lg font-semibold text-blue-500">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HomeInfoLinks;
