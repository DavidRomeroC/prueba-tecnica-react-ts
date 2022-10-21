import { FC } from "react"
import { Navbar } from "../ui/Navbar";
import { PropsMainLayout } from "./interfaceLayout";

export const MainLayout: FC<PropsMainLayout> = ({ children }) => {
    return (
        <div className="main__content">
            <Navbar />
            <div className="children__content">
                {children}
            </div>
        </div>
    )
}
