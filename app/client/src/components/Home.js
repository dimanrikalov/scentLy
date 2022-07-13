export default function Home () {
    return (
        <header id="home" className="header">
        <div className="overlay" />
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
          <div className="container">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="carousel-title">We Make<br /> Creative Design</h1>
                  <button className="btn btn-primary btn-rounded">Learn More</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="carousel-title">We Make <br /> Responsive Design</h1>
                  <button className="btn btn-primary btn-rounded">Learn More</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="carousel-title">We Make <br /> Simple Design</h1>
                  <button className="btn btn-primary btn-rounded">Catalog</button>
                </div>
              </div>
            </div>
          </div>        
        </div>
        <div className="infos container mb-4 mb-md-2">
          <div className="title">
            <h6 className="subtitle font-weight-normal">Are locking for</h6>
            <h5>Lorem inpsum</h5>
            <p className="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </header>
    );
}