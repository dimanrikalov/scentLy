import endpoints from '../endpoints';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './CreateReviewForm.module.css';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';


export default function CreateReviewForm() {

    const navigate = useNavigate();

    const { fragranceId } = useParams();
    
    const {user, setUser} = useContext(UserContext);

    const [hasError, setHasError] = useState({});
    const [fragrance, setFragrance] = useState({});
    const [ratingHasError, setRatingHasError] = useState('');
    const [descriptionHasError, setDescriptionHasError] = useState('');

    const [values, setValues] = useState({
        description: '',
        rating: '',
    });

    const onChangeHandler = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const validateDescription = () => {
        if(values.description.length < 10) {
            setDescriptionHasError(true);
        } else {
            setDescriptionHasError(false);
        }
    }

    
    const validateRating = () => {
        if(values.rating < 1 || values.rating > 5) {
            setRatingHasError(true);
        } else {
            setRatingHasError(false);
        }
    }

    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
            .then((res) => res.json())
            .then((data) => setFragrance(data))
            .catch(err => setHasError(err));
    }, [fragranceId]);

    const submitHandler = (e) => {
        e.preventDefault();

        fetch(`${endpoints.catalogUrl}/${fragranceId}/review/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fragrance,
                description: values.description,
                rating: values.rating,
                author: user._id
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.creator);
                navigate(`/fragrance/${fragranceId}/details`);
            })
            .catch((err) => {
                setHasError(err);
            });
    };
    return (
        <div className={styles['create-form']}>
            <div className={styles['left-side']}>
                <img className={styles.img} src={fragrance.imageUrl} />
            </div>

            <div className={styles['right-side']}>
                <form>
                    <h1 className={styles['text']}>Create a review</h1>
                    {
                        hasError && 
                        <h3>{hasError.message}</h3>
                    }
                    <div className="mx-auto max-w-xs">
                        <h4 className={styles['subtitle']}>
                            Review description:{' '}
                        </h4>
                        <textarea
                            name="description"
                            cols="30"
                            rows="10"
                            className={styles.description}
                            value={values.description}
                            onChange={onChangeHandler}
                            onBlur={validateDescription}
                            placeholder="Enter a review"
                        ></textarea>
                        {   
                            descriptionHasError && 
                            <h6 className={styles['error-message']}>
                                Minimum description length 10 characters!
                            </h6>
                        }
                        <h4 className={styles['subtitle']}>Review score: </h4>
                        <input
                            type="number"
                            name="rating"
                            className={styles.rating}
                            value={values.rating}
                            onChange={onChangeHandler}
                            onBlur={validateRating}
                            placeholder="    [1-5]"
                        />
                        {   
                            ratingHasError && 
                            <h6 className={styles['error-message']}>
                                Invalid rating value [1-5]!
                            </h6>
                        }
                        <button
                            type="submit"
                            className={styles['submit-button']}
                            onClick={submitHandler}
                            disabled= {
                                !values.description ||
                                !values.rating ||
                                descriptionHasError ||
                                ratingHasError
                            }
                        >
                            <span className="ml-3 text-lg">Create</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
