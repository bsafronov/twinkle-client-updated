import { HiHeart } from "react-icons/hi";

const PostComment = () => {
  return (
    <li className="flex gap-2 items-start">
      <div className="rounded-full min-w-[2rem] min-h-[2rem] bg-slate-300"></div>
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
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <span className="text-slate-400 text-[12px]">7 марта в 18:00</span>
          </div>
          <div className="flex gap-1 items-center py-1 px-2 rounded-full hover:bg-slate-100 group cursor-pointer">
            <HiHeart
              size={16}
              className="text-slate-300 transition-colors group-hover:text-red-500"
            />
            <span className="text-slate-300">3</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostComment;
