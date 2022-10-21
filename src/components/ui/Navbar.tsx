import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/authSlice";

export const Navbar = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar__content">
            <ul>
                <li>
                    <NavLink
                        to="/employees"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        Employees
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/addemployee"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        Add Employees
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/upload"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        Drag and drop
                    </NavLink>
                </li>
            </ul>
            <div 
            className="logout__button-content"
            onClick={handleLogout}
            >
                <button>Logout</button>
            </div>
        </nav>
    )
}
