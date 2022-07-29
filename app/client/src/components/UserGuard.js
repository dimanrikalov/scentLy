import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function UserGuard() {
    const {user} = useContext(UserContext);
    if(!user) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet/>;
}