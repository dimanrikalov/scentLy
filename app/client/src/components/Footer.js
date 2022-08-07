import endpoints from '../endpoints';
import styles from './Footer.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext, useState, useEffect, Fragment } from 'react';


export default function Footer() {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState('');
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if(user) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
    }, [user])
    
      const onLogoutHandler = async () => {
        fetch(endpoints.logoutUrl, {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            }     
        })
        .then(res => res.json())
        .then(() => {
            setUser(null);
            navigate('/');
        });
    }

    return (
        <footer className={styles['footer-distributed']}>
            <div className={styles['footer-left']}>
                <p className={styles['footer-links']}>
                    <Link className={styles['link-1']} to="/">
                        Home
                    </Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    {
                        (() => {
                            if(isLogged !== true) {
                                return (
                                    <Fragment>
                                        <Link to="/auth/register">Register</Link>
                                        <Link to="/auth/login">Login</Link>
                                    </Fragment>
                                )
                            } else {
                                return (
                                    <Fragment>
                                        <Link to="/fragrance/create">Create</Link>
                                        <Link to="#" onClick={onLogoutHandler}>Logout</Link>
                                    </Fragment>
                                )
                            }
                        })()
                    }
                </p>
                <a href="https://linktr.ee/dimanrikalov">
                    <p className="author">
                        <strong>Diman Rikalov ® 2022</strong>
                    </p>
                </a>
            </div>
        </footer>
    );
}
