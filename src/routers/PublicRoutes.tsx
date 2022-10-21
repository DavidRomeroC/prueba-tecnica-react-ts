import { FC } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { PropsPublicRoutes } from "./interfaceRouters";

export const PublicRoutes: FC<PropsPublicRoutes> = ({isLogin}) => {

    return isLogin ? <Navigate to="/employees" /> : <Outlet />;
}
