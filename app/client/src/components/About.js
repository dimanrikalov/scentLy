import styles from './About.module.css';

export default function About () {
    return (
        
          <div id="about" className={styles.container}>
          <img src="./assets/imgs/sitename.png" alt="" className={['pb-20', styles.aboutImage].join(' ')}/>
            <div className="row align-items-center mr-auto">
              <div className={["col-md-3", styles.aboutUsText].join(' ')}>
                <h3 className="section-title text-red-500">About Us</h3>
                <p className="text-gray-800"><strong><u className="text-red-500">ScentLy</u> is the go-to place for keeping up to date with the latest trends in 
                    the fragrance industry. The goal is to develop a strong community comprised of people 
                    from <strong><u className="text-red-500">all</u></strong> sides of the spectrum - From newcomers to the most dedicated to the art of 
                    fragrance connoisseurs.</strong></p>
              </div>
              <div className="col-sm-6 col-md-4 ml-auto">
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-user text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">15+</h4>
                                <p className="text-secondary text-gray-900"><strong>Total Users</strong></p>
                            </div>
                        </div>
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-face-smile text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">125+</h4>
                                <p className="text-secondary text-gray-900"><strong>Total Reviews</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-star text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">3434+</h4>
                                <p className="text-secondary text-gray-900"><strong>Total fragrances</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    )
}