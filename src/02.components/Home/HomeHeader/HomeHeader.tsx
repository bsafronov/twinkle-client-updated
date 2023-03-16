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
        "min-h-[20rem] relative overflow-hidden card flex flex-col justify-end h-full"
      )}
    >
      <HomeHeaderBackground />
      <div className="flex flex-col gap-3 sm:gap-1 sm:flex-row sm:justify-between sm:items-start bg-white rounded-t-lg w-full box relative z-10 justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center">
          <HomeHeaderAvatar />
          <HomeHeaderInfo />
        </div>
        <HomeHeaderActions />
      </div>
    </div>
  );
};

export default HomeHeader;
