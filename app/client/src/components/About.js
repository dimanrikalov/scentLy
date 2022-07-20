import endpoints from '../endpoints';
import styles from './About.module.css';
import {useEffect, useState} from 'react';


export default function About () {
    const [fragranceCount, setFragranceCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        fetch(`${endpoints.aboutUrl}`)
        .then(res => res.json())
        .then(data => {
            setFragranceCount(data.fragranceCount);
            setReviewsCount(data.reviewsCount);
            setUserCount(data.userCount);
        }, []);
    })

    return (
        
        <div className={styles['min-width']}>
            <div id="about" className={styles.container}>
          <div className={styles.imageBackground}><img src="./assets/imgs/sitename.png" alt="site-img" className={['pb-20', styles.aboutImage].join(' ')}/></div>
            <div className="row align-items-center">
              <div className={["col-md-3", styles.aboutUsText].join(' ')}>
                <h3 className="section-title text-red-500">About Us</h3>
                <p className="text-gray-800"><strong><u className="text-red-500">ScentLy</u> is the go-to place for keeping up to date with the latest trends in 
                    the fragrance industry. The goal is to develop a strong community comprised of people 
                    from <strong><u className="text-red-500">all</u></strong> sides of the spectrum - From newcomers to the most dedicated to the art of 
                    fragrance connoisseurs.</strong></p>
              </div>
              <div className={["col-sm-6", "col-md-4", "ml-auto pt3 pb-4 ", styles.statsCards].join(' ')}>
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-user text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary text-4xl">{userCount}</h4>
                                <p className="text-secondary text-center text-gray-900 text-3xl"><strong>Total Users</strong></p>
                            </div>
                        </div>
                        <div className="widget">
                            <div className="icon-wrapper">
                                <i className="ti-face-smile text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary text-4xl">{reviewsCount}</h4>
                                <p className="text-secondary text-center text-gray-900 text-3xl"><strong>Total Reviews</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className={["col-sm-6", "col-md-4", styles.statsCards].join(' ')}>
                        <div className={["widget", styles.tallWidget].join(' ')}>
                            <div className="icon-wrapper">
                                <i className="ti-star text-primary" />
                            </div>
                            <div className="infos-wrapper">
                                <h4 className="text-primary">{fragranceCount}</h4>
                                <p className="text-secondary text-center text-gray-900"><strong>Total fragrances</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    )
}