import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Owned from './Owned';
import styles from './Profile.module.css';
import endpoints from '../endpoints';
import Reviewed from './Reviewed';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ownedFragrances, setOwnedFragrances] = useState([]);
    const [filteredFragrances, setFilteredFragrances] = useState([...ownedFragrances]);
    const [reviews, setReviews] = useState([]);

    const [searchValues, setSearchValues] = useState({
        searchOwnedFragrance: '',
        searchReviewedFragrance: '',
    });

    useEffect(() => {
        fetch(`${endpoints.profileUrl}/${user._id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFilteredFragrances(data.ownedFragrances);
                setOwnedFragrances(data.ownedFragrances);
                setReviews(data.reviews);
            });
    }, []);

    const onSearchOwnedFragranceChange = (e) => {
        setSearchValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onOwnedSearchHandler = (e) => {
        e.preventDefault();
        console.log(searchValues.searchOwnedFragrance)
        setFilteredFragrances(
            ownedFragrances.filter(
                (x) =>
                    x.name.toLowerCase()
                        .includes(searchValues.searchOwnedFragrance.toLowerCase()) 
                || 
                    x.brand.toLowerCase()
                        .includes(searchValues.searchOwnedFragrance.toLowerCase())
            )
        );
    };



    return (
        <div id="profile" className={styles['profilePage']}>
            <div className={styles['profileDiv']}>
                <h1>{user.name}</h1>

                <img className={styles.profileImg} src={user.profileImage} />

                <div>
                    <h2 className="pb-3">Profile Information:</h2>
                    <ul>
                        <li>
                            <h5>Age: {user.age}</h5>
                        </li>
                        <li>
                            <h5>Gender: {user.gender}</h5>
                        </li>
                        <li>
                            <h5>
                                Location: {user.city}, {user.country}
                            </h5>
                        </li>
                        <li>
                            <h5>
                                Fragrances owned: {user.ownedFragrances.length}
                            </h5>
                        </li>
                        <li>
                            <h5>Review count: {user.reviews.length}</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.collections}>
                <h2 className="ml-20 mt-10 mb-3">Owned fragrances:</h2>
                <input
                    className={styles.input}
                    type="text"
                    name="searchOwnedFragrance"
                    value={searchValues.searchOwnedFragrance}
                    onChange={onSearchOwnedFragranceChange}
                    placeholder="Search for a fragrance"
                />
                <button
                    type="submit"
                    className={styles['search-button']}
                    onClick={onOwnedSearchHandler}
                >
                    Search
                </button>
                <div className={styles.profileOwned}>
                    <Owned ownedFragrances={filteredFragrances} />
                </div>
                <h2 className="ml-20 mt-10 mb-3">Reviewed fragrances:</h2>
                <input
                    className={styles.input}
                    type="text"
                    name="searchReviewedFragrance"
                    value={searchValues.searchReviewedFragrance}
                    onChange={onSearchOwnedFragranceChange}
                    placeholder="Search for a fragrance"
                />
                <button
                    type="submit"
                    className={styles['search-button']}
                    onClick={onReviewedSearchHandler}
                >
                    Search
                </button>
                <div className={styles.profileReviews}>
                    <Reviewed reviewed={reviews} />
                </div>
            </div>
        </div>
    );
}
