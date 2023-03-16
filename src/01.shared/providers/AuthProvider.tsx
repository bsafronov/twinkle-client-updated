import { FC, ReactNode } from "react";
import { useAppSelector } from "../hooks/useRedux";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const { isAuth } = useAppSelector((state) => state.user);
  return <>{children}</>;
};

export default AuthProvider;
