export default function Home () {
    return (
        <header id="home" className="header">
        <div className="overlay" />
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
          <div className="container">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="carousel-title">Welcome to<br /> ScentLy!</h1>
                  <button className="btn btn-primary btn-rounded"><strong>Catalog</strong></button>
                </div>
              </div>
            </div>
          </div>        
        </div>
        <div className="infos container mb-4 mb-md-5">
          <div className="title">
            <h5>
              "If you enjoy the fragrance of a rose, <br/>
              you must accept the thorns which it bears."
             </h5>
            <p className="font-small">Isaac Hayes</p>
          </div>
        </div>
      </header>
    );
}