import Recents from './Recents';
import endpoints from '../endpoints';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useEffect, useState, useContext } from 'react';


export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(endpoints.reviewsUrl)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <>
            <header id="home" className="header">
                <div className="overlay" />
                <div
                    id="header-carousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                >
                    <div className="container">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="carousel-title">
                                        Welcome to
                                        <br /> ScentLy
                                        {
                                        user
                                        ? 
                                            `, ${user.name.slice(0, user.name.indexOf(' '))}`
                                        : 
                                            ''
                                        }
                                        !
                                    </h1>
                                    <h6 className="font-medium">
                                        Scroll down to see most recent reviews
                                    </h6>
                                    <Link to="/catalog" className="text-white">
                                        <button className="btn btn-primary btn-rounded scroll-behaviour: smooth">
                                            <strong>Catalog</strong>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infos container mb-4 mb-md-5">
                    <div className="title">
                        <h5 className="font-medium italic">
                            "If you enjoy the fragrance of a rose, <br />
                            you must accept the thorns which it bears."
                        </h5>
                        <p className="text-base font-bold text-white mt-2">
                            Isaac Hayes
                        </p>
                    </div>
                </div>
            </header>
            {reviews?.length > 0 ? (
                <div id="recents">
                    <Recents reviews={reviews} />
                </div>
            ) : (
                <h1 className={styles['no-reviews']}>
                    No reviews in database yet.
                    <br />
                    Be the first one to review a fragrance!
                </h1>
            )}
        </>
    );
}
