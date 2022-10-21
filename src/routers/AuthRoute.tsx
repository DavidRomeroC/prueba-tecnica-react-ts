import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, LoginScreen } from '../pages';
import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/authSlice';

export const AuthRoute = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const user = localStorage.getItem('userActive') || "";

        if (user) {
            const { usuario, contraseña } = JSON.parse(user);
            if (usuario === "david" && contraseña === "romero") {
                dispatch(login({ usuario, contraseña }))
            }
        }
    }, [])

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    )
}
