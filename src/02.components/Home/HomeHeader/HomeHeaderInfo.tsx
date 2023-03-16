import { AiFillInfoCircle } from "react-icons/ai";
const HomeHeaderInfo = () => {
  return (
    <div className="flex flex-col sm:gap-1 text-center sm:text-left">
      <h3 className="text-xl md:text-2xl flex items-start gap-1">
        <span>Богдан Сафронов</span>
        <AiFillInfoCircle size={16} className="icon xl:hidden " />
      </h3>
      <span className="text-slate-500">@bogdasafronov</span>
    </div>
  );
};

export default HomeHeaderInfo;
