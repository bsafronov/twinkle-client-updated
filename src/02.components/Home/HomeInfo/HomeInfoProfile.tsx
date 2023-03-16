const HomeInfoProfile = () => {
  const userInfo = [
    { desc: "Возраст", value: "22 года" },
    { desc: "Место обучения", value: "РТУ МИРЭА" },
    { desc: "Место работы", value: "-" },
    { desc: "Семейное положение", value: "Не женат" },
    { desc: "Город", value: "Москва" },
  ];

  return (
    <ul className="box flex flex-col gap-2">
      {userInfo.map((item, index) => (
        <li key={index} className="flex justify-between">
          <span className="text-slate-400">{item.desc}:</span>
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default HomeInfoProfile;
