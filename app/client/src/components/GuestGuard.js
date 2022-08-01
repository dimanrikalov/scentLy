import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const isLogged = localStorage.getItem('user');
    if(isLogged) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}