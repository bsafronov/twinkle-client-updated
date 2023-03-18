import HomeHeaderActions from "./HomeHeaderActions";
import HomeHeaderAvatar from "./HomeHeaderAvatar";
import HomeHeaderBackground from "./HomeHeaderBackground";
import HomeHeaderInfo from "./HomeHeaderInfo";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

interface HomeHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const HomeHeader: FC<HomeHeaderProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "card relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden"
      )}
    >
      <HomeHeaderBackground />
      <div className="box relative z-10 flex w-full flex-col items-center justify-center gap-3 rounded-t-lg bg-white dark:bg-gray-800 sm:flex-row sm:items-start sm:justify-between sm:gap-1">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <HomeHeaderAvatar />
          <HomeHeaderInfo />
        </div>
        <HomeHeaderActions />
      </div>
    </div>
  );
};

export default HomeHeader;
