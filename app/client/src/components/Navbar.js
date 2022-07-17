import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav id="scrollspy" className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#home"><img src="assets/imgs/logo.png" alt="site-logo" className="brand-img" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                  <Link className="nav-link nav-link-black" to="/auth/logout">Logout</Link>
                </li>
                <li className="nav-item ml-0 ml-lg-4">
                  <Link className="nav-link btn btn-primary" to="/auth/profile">Profile</Link> 
                                                    {/* components.html */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}