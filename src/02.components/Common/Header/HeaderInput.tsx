import { AiOutlineSearch } from "react-icons/ai";

const HeaderInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-slate-100 rounded-lg py-2 pl-8 focus:outline-none peer"
        placeholder="Поиск..."
      />
      <AiOutlineSearch
        size={16}
        className="text-slate-400 absolute top-1/2 left-2 -translate-y-1/2 peer-focus:text-slate-500"
      />
    </div>
  );
};

export default HeaderInput;
