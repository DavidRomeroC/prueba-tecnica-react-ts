import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddEmployee, EmployeesScreen, UploadScreen } from "../pages"
import { PublicRoutes, PrivateRoutes, AuthRoute } from './';
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export const AppRouter = () => {

    const { isLogin } = useAppSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes isLogin={isLogin} />}>
                    <Route path="*" element={<AuthRoute />} />
                </Route>
                <Route element={<PrivateRoutes isLogin={isLogin} />} >
                    <Route path="/employees" element={<EmployeesScreen />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route path="/upload" element={<UploadScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
