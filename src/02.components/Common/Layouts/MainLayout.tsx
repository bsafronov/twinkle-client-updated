import { useAppSelector } from "@/01.shared/hooks/useRedux";
import AuthForm from "@/02.components/Auth/AuthForm";
import Header from "@/02.components/Common/Header/Header";
import Navbar from "@/02.components/Common/Navbar/Navbar";
import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;
  const isAuth = useAppSelector((state) => state.user.isAuth);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mb-20 flex items-start gap-4 pt-4 lg:pt-20">
          {isAuth ? <Navbar /> : <AuthForm />}
          <div className="grid grid-cols-12 gap-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
