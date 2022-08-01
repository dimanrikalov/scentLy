import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const {user, setUser} = useContext(UserContext);
    console.log(`guest ` + user);
    if(user) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}