import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router';

type PropsType = {
  children: ReactElement;
};

export const ProtectedRoute: FC<PropsType> = ({ children }) => {
  const isLogin = false;
  return isLogin ? children : <Navigate to='/page/:error ' />;
};
