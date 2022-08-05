import endpoints from '../endpoints';
import { createContext } from "react";
import { useEffect, useState } from "react";


export const UserContext = createContext(null);

export default function UserProvider ({children}) {
    const [user, setUser] = useState(null);
    // const userValue = useMemo(() => ({user, setUser}), [user, setUser]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const isLogged = JSON.parse(localStorage.getItem('user'));

        if(isLogged) {
            fetch(`${endpoints.getUserUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId : isLogged._id
                })
            })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                localStorage.clear();
                setUser(null);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    },[])

    return <UserContext.Provider value={{user, setUser, loading}}>{children}</UserContext.Provider>
}