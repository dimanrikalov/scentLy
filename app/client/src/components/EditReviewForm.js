import styles from './CreateReviewForm.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import endpoints from '../endpoints';
import {UserContext} from '../contexts/UserContext';

export default function EditReviewForm () {
    const { fragranceId } = useParams();
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    
    const [descriptionHasError, setDescriptionHasError] = useState('');
    const [ratingHasError, setRatingHasError] = useState('');
    const [fragrance, setFragrance] = useState({});

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
            .then((data) => {
                setFragrance(data);
            });
    }, [fragranceId]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user._id);
        fetch(`${endpoints.catalogUrl}/${fragranceId}/review/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fragrance,
                description: values.description,
                rating: values.rating,
                userId: user._id
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setFragrance(data.fragrance);
                navigate(`/fragrance/${fragranceId}/details`);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className={styles['create-form']}>
            <div className={styles['left-side']}>
                <img src={fragrance.imageUrl} />
            </div>

            <div className={styles['right-side']}>
                <form>
                    <h1 className={styles['text']}>Edit review</h1>
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
                            disabled={
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