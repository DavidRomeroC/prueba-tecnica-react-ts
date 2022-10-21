import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div className="homepage__main-content" >
            <h2>Home page</h2>
            <p>Test by David Romero C.</p>
            <button onClick={handleLogin} >Log in</button>
        </div>
    )
}
