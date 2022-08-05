import Loading from "./Loading";
import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const {user, loading} = useContext(UserContext); 
    
    if(loading) {
        return <Loading/>;
    }

    if(!user) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet />;
}