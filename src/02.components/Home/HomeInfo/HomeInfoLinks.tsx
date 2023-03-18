const HomeInfoLinks = () => {
  const homeLinks = [
    { desc: "Подписки", value: 10, href: "/" },
    { desc: "Группы", value: 8, href: "/" },
    { desc: "Подписчики", value: 12, href: "/" },
    { desc: "Музыка", value: 165, href: "/" },
    { desc: "Фото", value: 20, href: "/" },
    { desc: "Видео", value: 20, href: "/" },
  ];

  return (
    <ul className="box grid grid-cols-3 gap-1 lg:grid-cols-3 xl:grid-cols-2">
      {homeLinks.map((item, index) => (
        <li
          key={index}
          className="hov-color group relative flex cursor-pointer flex-col items-center rounded-lg px-2 transition-colors"
        >
          <span className="group-hov-color relative z-10 font-semibold text-slate-400 transition-colors">
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
