import endpoints from '../endpoints';
import styles from './About.module.css';
import { useEffect, useState } from 'react';


export default function About() {
    const [hasError, setHasError] = useState({});
    const [userCount, setUserCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [fragranceCount, setFragranceCount] = useState(0);

    useEffect(() => {
        fetch(endpoints.aboutUrl)
            .then((res) => res.json())
            .then((data) => {
                setUserCount(data.userCount);
                setReviewsCount(data.reviewsCount);
                setFragranceCount(data.fragranceCount);
            })
            .catch(err => setHasError(err));
    }, []);

    return (
        <div>
            <div id="about" className={styles.main}>
            <div className={styles.about}>
                        <h3 className={styles['about-title']}>About Us</h3>
                        <p className={styles['about-text']}>
                            <strong>
                                <u className={styles.underlined} >ScentLy</u> is the
                                go-to place for keeping up to date with the
                                latest trends in the fragrance industry. The
                                goal is to develop a strong community comprised
                                of people from{' '}
                                <strong>
                                    <u className={styles.underlined}>all</u>
                                </strong>{' '}
                                sides of the spectrum - From newcomers to the
                                most dedicated to the art of fragrance
                                connoisseurs.
                            </strong>
                        </p>
                    </div>
               
                <div>
                <div className={styles['image-background']}>
                    <img
                        src="/assets/imgs/sitename.png"
                        alt="site-img"
                        className={styles.image}
                    />
                </div>
                    <div className={styles['stats-parent']}>
                        <div className={styles.stat}>
                            <div>
                            </div>
                            <div>
                                <h4 className={styles['stat-number']}>
                                    {hasError.message ? 'Can\'t connect to server!' : userCount}
                                </h4>
                                <p className={styles['stat-description']}>
                                    <strong>Total Users</strong>
                                </p>
                            </div>
                        </div>
                        <div className={['ml-5', styles.stat].join(' ')}>
                            <div>
                            </div>
                            <div>
                                <h4 className={styles['stat-number']}>
                                {hasError.message ? 'Can\'t connect to server!' : reviewsCount}
                                </h4>
                                <p className={styles['stat-description']}>
                                    <strong>Total Reviews</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles['frag-stat']}>
                            <div>
                            </div>
                            <div className={styles['frag-stat-text']}>
                                <h4 className={styles['frag-stat-number']}>
                                {hasError.message ? 'Can\'t connect to server!' : fragranceCount}
                                </h4>
                                <p className={styles['frag-stat-text']}>
                                    <strong>Total fragrances</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
