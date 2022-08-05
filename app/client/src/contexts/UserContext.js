import { Children, createContext } from "react";
import { useEffect, useState } from "react";
import endpoints from '../endpoints';
export const UserContext = createContext(null);



const UserProvider = ({children}) => {
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
                console.log(data);
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

export default UserProvider;