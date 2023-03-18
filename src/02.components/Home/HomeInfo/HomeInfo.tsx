import HomeInfoLinks from "./HomeInfoLinks";
import HomeInfoProfile from "./HomeInfoProfile";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

interface HomeInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const HomeInfo: FC<HomeInfoProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(className, "card flex h-full flex-col justify-between")}
    >
      <div className="hidden xl:block">
        <HomeInfoProfile />
        <hr />
      </div>
      <HomeInfoLinks />
    </div>
  );
};

export default HomeInfo;
