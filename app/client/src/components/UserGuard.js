import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


export default function UserGuard() {
    const isLogged = JSON.parse(localStorage.getItem('user'));
    if(!isLogged) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet />;
}