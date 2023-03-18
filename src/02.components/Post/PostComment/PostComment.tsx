import { HiHeart } from "react-icons/hi";

const PostComment = () => {
  return (
    <li className="flex items-start gap-2">
      <div className="min-h-[2rem] min-w-[2rem] rounded-full bg-slate-300"></div>
      <div className="flex flex-col gap-1">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Богдан Сафронов
        </a>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          exercitationem reiciendis commodi quas quo eius iste sequi ullam porro
          pariatur consequuntur ut perferendis quidem animi, soluta vel illum
          reprehenderit incidunt?
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <span className="text-[12px] text-slate-400">7 марта в 18:00</span>
          </div>
          <div className="group flex cursor-pointer items-center gap-1 rounded-full py-1 px-2 hover:bg-slate-100 dark:hover:bg-slate-700">
            <HiHeart
              size={16}
              className="text-slate-300 transition-colors group-hover:text-red-500 dark:text-slate-500"
            />
            <span className="text-slate-300 dark:text-slate-500">3</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostComment;
