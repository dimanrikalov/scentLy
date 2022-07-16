export default function Navbar () {
    return (
        <nav id="scrollspy" className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="assets/imgs/logo.png" alt="site-logo" className="brand-img" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#catalog">Catalog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#register">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#create">Create</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#logout">Logout</a>
                </li>
                <li className="nav-item ml-0 ml-lg-4">
                  <a className="nav-link btn btn-primary" href="#profile">Profile</a> 
                                                    {/* components.html */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}