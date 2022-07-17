import Recents from "./Recents";

export default function Home () {
    return (
      <>
        <header id="home" className="header">
        <div className="overlay" />
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
          <div className="container">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="carousel-title">Welcome to<br /> ScentLy!</h1>
                  <a href="#recents" className="text-white"><button className="btn btn-primary btn-rounded"><strong>Recents</strong></button></a>
                  
                </div>
              </div>
            </div>
          </div>        
        </div>
        <div className="infos container mb-4 mb-md-5">
          <div className="title">
            <h5 className="font-medium italic">
              "If you enjoy the fragrance of a rose, <br/>
              you must accept the thorns which it bears."
             </h5>
            <p className="text-base font-bold text-white mt-2">Isaac Hayes</p>
          </div>
        </div>
      </header>
      <div id="recents">
         <Recents/>
      </div>
      </>
    );
}