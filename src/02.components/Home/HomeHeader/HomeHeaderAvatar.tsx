const HomeHeaderAvatar = () => {
  return (
    <div className="relative rounded-full ring-4 ring-white min-h-[8rem] min-w-[8rem] sm:-mt-20 -mt-28 bg-slate-200">
      <span className="rounded-full flex ring-4 ring-white bg-green-500 absolute bottom-4 right-2 h-4 w-4">
        <span className="relative rounded-full bg-green-500 opacity-50 animate-ping h-4 w-4"></span>
      </span>
    </div>
  );
};

export default HomeHeaderAvatar;
