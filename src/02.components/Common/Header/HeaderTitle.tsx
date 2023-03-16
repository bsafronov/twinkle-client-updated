import { AiFillFire } from "react-icons/ai";

const HeaderTitle = () => {
  return (
    <div className="flex gap-2 translate-x-1 w-14 xl:w-44">
      <AiFillFire size={24} className="text-slate-500" />
      <h3 className="hidden xl:block">Огонёк</h3>
    </div>
  );
};

export default HeaderTitle;
