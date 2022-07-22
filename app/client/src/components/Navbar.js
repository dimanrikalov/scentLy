import { Link, useNavigate } from "react-router-dom";
import endpoints from '../endpoints';
import styles from './Navbar.module.css';
export default function Navbar () {

    const navigate = useNavigate();

    const onLogoutHandler = async () => {
        fetch(endpoints.logoutUrl, {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            }     
        })
        .then(res => res.json())
        .then(data => {
            navigate('/');
        });
    }

    return (
        <nav id="scrollspy" className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src="../assets/imgs/logo.png"
             alt="site-logo" className="brand-img" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/catalog">Catalog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/auth/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/auth/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-black" to="/fragrance/create">Create</Link>
                </li>
                <li className="nav-item">
                  <button className={["nav-link","nav-link-black", styles['logout-button']].join(" ")} onClick={onLogoutHandler}>Logout</button>
                </li>
                <li className="nav-item ml-0 ml-lg-4">
                  <Link className="nav-link btn btn-primary" to="/auth/profile">Profile</Link> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}