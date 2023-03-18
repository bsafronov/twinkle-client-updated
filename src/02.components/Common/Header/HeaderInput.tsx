import { AiOutlineSearch } from "react-icons/ai";

const HeaderInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="peer rounded-lg bg-slate-100 py-2 pl-8 focus:outline-none dark:bg-gray-700"
        placeholder="Поиск..."
      />
      <AiOutlineSearch
        size={16}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 dark:peer-focus:text-white"
      />
    </div>
  );
};

export default HeaderInput;
