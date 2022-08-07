import Loading from "./Loading";
import endpoints from '../endpoints';
import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

export default function FragranceEditGuard() {
    const { user } = useContext(UserContext); 
    const [isLoading, setIsLoading] = useState(true);
    const [isFragranceCreator, setIsFragranceCreator] = useState(false);
    let fragranceId = window.location.pathname.slice(11);
    fragranceId = fragranceId.slice(0, fragranceId.indexOf('/'));

    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                if(data.author.toString() == user._id.toString()) {
                    setIsFragranceCreator(true);
                }
            })
            .catch(() => {
                setIsLoading(false);
                setIsFragranceCreator(false);
            });
    }, [])

    if(isLoading) {
        return <Loading />
    } else {
        if(isFragranceCreator) {
            return <Outlet />
        }
        
        return <Navigate to={`/fragrance/${fragranceId}/details`} replace />
    }
}