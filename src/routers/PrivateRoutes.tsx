import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PropsPrivateRoutes } from "./interfaceRouters";

export const PrivateRoutes: FC<PropsPrivateRoutes> = ({isLogin}) => {
    return isLogin ? <Outlet /> : <Navigate to="/" />;
}



