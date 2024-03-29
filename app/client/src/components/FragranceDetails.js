import Loading from './Loading';
import Reviews from './Reviews.js';
import endpoints from '../endpoints';
import styles from './FragranceDetails.module.css';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function FragranceDetails () {
    const navigate = useNavigate();

    const { fragranceId } = useParams();

    const { user, setUser } = useContext(UserContext);

    const [fragrance, setFragrance] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoadingFragrance, setIsLoadingFragrance] = useState(true);
    
    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
            .then(res => res.json())
            .then(data => {
                setIsLoadingFragrance(false);
                setFragrance(data)
            });
    }, [fragranceId])    


    const onDeleteHandler = () => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/delete`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({userId: user._id})
        })
            .then(res => res.json())
            .then((data) => {
                setUser(data.user);
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

    if(isLoadingFragrance) {
        return <Loading />
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
                
                <div>
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
                        ? ` ${(fragrance.rating)?.toFixed(2)}`
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
                                    <Link to={`/fragrance/${fragrance._id}/edit`}><button className={styles.button}>Edit</button></Link>
                                    <Link to={'#'}><button className={styles.button} onClick={onDeleteHandler}>Delete</button></Link>
                                </> 
                            )
                        } else if(user) {
                            const hasReviewed = fragrance.reviews?.some(x => x.author._id.toString() === user._id.toString());
                            if(hasReviewed) {
                                return (
                                    <>
                                        <Link to={`/fragrance/${fragrance._id}/review/edit`}><button className={styles.button}>Edit Review</button></Link>
                                        <Link to={'#'}><button className={styles.button} onClick={onReviewDelete}>Delete Review</button></Link>
                                    </>
                                )
                            } else {
                                return(
                                    <>
                                        <Link to={`/fragrance/${fragrance._id}/review/create`}><button className={styles.button}>Review</button></Link>
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