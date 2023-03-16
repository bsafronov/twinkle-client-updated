import { HiChevronDown } from "react-icons/hi";

const HomeHeaderActions = () => {
  return (
    <div className="flex gap-2 items-center">
      <button className="btn-primary">Написать</button>
      <button className="btn-secondary group flex gap-1 items-end">
        <span>Ещё</span>
        <HiChevronDown size={16} className="icon group-hover:text-slate-400" />
      </button>
    </div>
  );
};

export default HomeHeaderActions;
