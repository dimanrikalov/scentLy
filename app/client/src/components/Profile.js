import Owned from './Owned';
import Reviewed from './Reviewed';
import endpoints from '../endpoints';
import styles from './Profile.module.css';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';


export default function Profile() {
    const { user, setUser } = useContext(UserContext);

    const [reviews, setReviews] = useState([]);
    const [hasError, setHasError] = useState({});
    const [ownedFragrances, setOwnedFragrances] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([...reviews]);
    const [filteredFragrances, setFilteredFragrances] = useState([...ownedFragrances]);

    const [searchValues, setSearchValues] = useState({
        searchOwnedFragrance: '',
        searchReviewedFragrance: '',
    });

    useEffect(() => {
        fetch(`${endpoints.profileUrl}/${user._id}`)
            .then((res) => res.json())
            .then((data) => {
                setOwnedFragrances(data.ownedFragrances);
                setReviews(data.reviews);
                setFilteredFragrances(data.ownedFragrances);
                setFilteredReviews(data.reviews);
            })
            .catch(err => setHasError(err));
    }, []);

    const onSearchChange = (e) => {
        setSearchValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onOwnedSearchHandler = (e) => {
        e.preventDefault();

        setFilteredFragrances(
            [...ownedFragrances.filter(
                (x) =>
                    x.name.toLowerCase()
                        .includes(searchValues.searchOwnedFragrance.toLowerCase()) 
                || 
                    x.brand.toLowerCase()
                        .includes(searchValues.searchOwnedFragrance.toLowerCase())
            )]
        );
    };

    const onReviewedSearchHandler = (e) => {
        e.preventDefault();

        setFilteredReviews(
            [...reviews.filter(
                (x) =>
                    x.fragranceName.toLowerCase()
                        .includes(searchValues.searchReviewedFragrance.toLowerCase()) 
                || 
                    x.fragranceBrand.toLowerCase()
                        .includes(searchValues.searchReviewedFragrance.toLowerCase())
            )]
        );
    };

    return (
        <div id="profile" className={styles['profilePage']}>
            <h1 className={styles['error-message']}>
                {hasError.message}
            </h1>
            <div className={styles['profileDiv']}>
                

                <img className={styles.profileImg} src={user.profileImage} />

                <div>
                    <h1 className="pb-3">Profile Information:</h1>
                    <ul>
                        <li>
                        <h3>Name: {user.name}</h3>
                        </li>
                        <li>
                            <h3>Age: {user.age}</h3>
                        </li>
                        <li>
                            <h3>Gender: {(()=>{
                                    let gender = user.gender.split('');
                                    gender[0] = gender[0].toUpperCase();
                                    return gender.join('');
                                })()}</h3>
                        </li>
                        <li>
                            <h3>
                                Location: {user.city}, {user.country}
                            </h3>
                        </li>
                        <li>
                            <h3>
                                Fragrances owned: {user.ownedFragrances.length}
                            </h3>
                        </li>
                        <li>
                            <h3>Review count: {user.reviews.length}</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.collections}>
                <h2 className={["ml-20", "mt-10", styles.child].join(' ')}>Owned fragrances:</h2>
                <input
                    className={[styles.input, styles.child, 'ml-32'].join(' ')}
                    type="text"
                    name="searchOwnedFragrance"
                    value={searchValues.searchOwnedFragrance}
                    onChange={onSearchChange}
                    placeholder="Search for a fragrance"
                />
                <button
                    type="submit"
                    className={[styles.child, styles['search-button'], 'ml-5'].join(' ')}
                    onClick={onOwnedSearchHandler}
                >
                    Search
                </button>
                <div className={styles.profileOwned}>
                    <Owned ownedFragrances={filteredFragrances} />
                </div>
                <h2 className={["ml-20", "mt-16", styles.child].join(' ')}>Reviewed fragrances:</h2>
                <input
                    className={[styles.input, styles.child, 'ml-24'].join(' ')}
                    type="text"
                    name="searchReviewedFragrance"
                    value={searchValues.searchReviewedFragrance}
                    onChange={onSearchChange}
                    placeholder="Search for a fragrance"
                />
                <button
                    type="submit"
                    className={[styles.child, styles['search-button'], 'ml-5'].join(' ')}
                    onClick={onReviewedSearchHandler}
                >
                    Search
                </button>
                <div className={styles.profileReviews}>
                    <Reviewed reviewed={filteredReviews} />
                </div>
            </div>
        </div>
    );
}
