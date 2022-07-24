import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Owned from './Owned';
import styles from './Profile.module.css';
import endpoints from '../endpoints';
import Reviewed from './Reviewed';

export default function Profile() {

    const {user, setUser} = useContext(UserContext);
    const [ownedFragrances, setOwnedFragrances] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${endpoints.profileUrl}/${user._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOwnedFragrances(data.ownedFragrances);
                setReviews(data.reviews);
            });
    }, []);

    return (
        <div id="profile" className={styles['profilePage']}>
            <div className={styles['profileDiv']}>
                <h1>{user.name}</h1>

                <img
                    className={styles.profileImg}
                    src={user.profileImage}
                />

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
                            <h5>Location: {user.city}, {user.country}</h5>
                        </li>
                        <li>
                            <h5>Fragrances owned: {user.ownedFragrances.length}</h5>
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
                name="catalogSearch"
                // value={searchValue.searchOwnedInput}
                // onChange={onOwnedChangeHandler}
                placeholder="Search for a fragrance"
            />
            <button
                type="submit"
                className={styles['search-button']}
                // onClick={onOwnedSubmitHandler}
            >
                Search
            </button>
                <div className={styles.profileOwned}>
                    <Owned ownedFragrances={ownedFragrances} />
                </div>
                <h2 className="ml-20 mt-10 mb-3">Reviewed fragrances:</h2>
                <input
                className={styles.input}
                type="text"
                name="catalogSearch"
                // value={searchValue.searchOwnedInput}
                // onChange={onOwnedChangeHandler}
                placeholder="Search for a fragrance"
            />
            <button
                type="submit"
                className={styles['search-button']}
                // onClick={onOwnedSubmitHandler}
            >
                Search
            </button>
                <div className={styles.profileReviews}>
                    <Reviewed reviewed={reviews}/>
                </div>
            </div>
        </div>
    );
}
