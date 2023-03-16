import Header from "@/02.components/Common/Header/Header";
import Navbar from "@/02.components/Common/Navbar/Navbar";
import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex gap-4 pt-4 lg:pt-20 mb-20 items-start">
          <Navbar />
          <div className="grid gap-4 grid-cols-12">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
