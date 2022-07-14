export default function About () {
    return (
          <div id="about" className="container">
            <div className="row align-items-center mr-auto">
              <div className="col-md-4">
                <h3 className="section-title text-red-500">About Us</h3>
                <p>"Fragrance Forum" is the go-to place for keeping up to date with the latest trends in 
                    the fragrance industry. The goal is to develop a strong community comprised of people 
                    from all sides of the spectrum: From newcomers to the most dedicated to the art of 
                    fragrance connoisseurs.</p>
              </div>
              <div className="col-sm-6 col-md-4 ml-auto">
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-user" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">15+</h4>
                                <p>Total Users</p>
                            </div>
                        </div>
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-face-smile" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">125+</h4>
                                <p>Total Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-star" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">3434+</h4>
                                <p>Total fragrances</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    )
}