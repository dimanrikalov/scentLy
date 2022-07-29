import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const {user} = useContext(UserContext);
    if(user) {
        return <Navigate to="/" replace />
    }
    console.log('here guest');
    return <Outlet/>;
}