import Reviews from './Reviews.js';
import endpoints from '../endpoints';
import styles from './FragranceDetails.module.css';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function FragranceDetails () {

    const navigate = useNavigate();

    const { fragranceId } = useParams();

    const {user, setUser} = useContext(UserContext);

    const [hasError, setHasError] = useState({});
    const [fragrance, setFragrance] = useState({});

    useEffect(() => {
        (async function getFragranceDetails () {
            const res = await fetch(`${endpoints.catalogUrl}/${fragranceId}/details`);
            const result = await res.json();
            setFragrance(result);
        })();

    }, [fragranceId, fragrance])    


    const onDeleteHandler = () => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/delete`)
            .then(res => res.json())
            .then((data) => {
                setUser(data.creator);
                navigate('/catalog');
            })
            .catch(err => setHasError(err));
    }

    const onReviewDelete = () => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/review/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: user._id})
        })
        .then(res => res.json())
        .then(data => {
            setUser(data.user);
            setFragrance(data.fragrance);
        })
        .catch(err => setHasError(err));
    }

    return (
        <div className={styles.main}>
            <div className={styles["left-side"]}>
                <h2 className={styles["title-text"]}>Name: {fragrance.name}</h2>
                <h2 className={styles["title-text"]}>Brand: {fragrance.brand}</h2>
                {
                    fragrance.creator
                    ? <h2 className={styles["title-text"]}>Creator: {fragrance.creator}</h2>
                    : <h2 className={styles["title-text"]}>Creator: Unknown</h2>
                }
                <img className={styles.image} src={fragrance.imageUrl} alt=""/>
            </div>

            <div className={styles["right-side"]}>
                
                <div className={styles["right-text"]}>
                    <h2 className={styles["right-side-margin"]}>Top notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">
                    {
                        fragrance.topNotes?.length > 1
                        ? fragrance.topNotes.join(', ')
                        : fragrance.topNotes
                    }
                    </div>
                    <h2>Middle notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">
                    {
                        fragrance.middleNotes?.length > 1
                        ? fragrance.middleNotes.join(', ')
                        : fragrance.middleNotes
                    }
                    </div>
                    <h2>Base notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">
                    {
                        fragrance.baseNotes?.length > 1
                        ? fragrance.baseNotes.join(', ')
                        : fragrance.baseNotes
                    }
                    </div>
                    <h2 className="mt-5">Average rating: 
                    {
                        fragrance.reviews?.length !== 0
                        ? ` ${fragrance.rating}`
                        : ' No reviews yet'
                    }
                    </h2>
                </div>

              
                {
                    fragrance.reviews?.length !== 0
                    && ( <div className={styles['review-div']}>
                            <Reviews reviews={fragrance.reviews}/>
                         </div>
                    )
                }

                {
                    hasError && 
                    <h1 className='pt-4'>
                        {hasError.message}
                    </h1>
                }

                <div className={styles['button-div']}>
                   {(()=> {
                        if(user?._id === fragrance.author) {
                            return (
                                <>
                                    <Link to={`/fragrance/${fragrance._id}/edit`} className={styles.button}>Edit</Link>
                                    <button className={styles['delete-button']} onClick={onDeleteHandler}>Delete</button>
                                </> 
                            )
                        } else if(user) {
                            const hasReviewed = fragrance.reviews?.some(x => x.author._id.toString() === user._id.toString());
                            if(hasReviewed) {
                                return (
                                    <>
                                        <Link to={`/fragrance/${fragrance._id}/review/edit`} className={styles.button}>Edit Review</Link>
                                        <button className={styles['delete-button']} onClick={onReviewDelete}>Delete Review</button>
                                    </>
                                )
                            } else {
                                return(
                                    <>
                                        <Link to={`/fragrance/${fragrance._id}/review/create`} className={styles.button}>Review</Link>
                                    </>
                                )
                            }
                        }
                   })()}
                </div>
            </div>
        </div>
    )
}