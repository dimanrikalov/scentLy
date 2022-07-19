import styles from './CreateReviewForm.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import endpoints from '../endpoints';

export default function CreateReviewForm () {

    const { fragranceId } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState('');

    const [values, setValues] = useState({
      description: '',
      rating: '',
    });

    const onChangeHandler = (e) => {
      setValues((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
      }));
    }

    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
          .then(res => res.json())
          .then(data => {
            setImage(data.imageUrl);
          })
    }, [fragranceId]);


    const submitHandler = (e) => {
      e.preventDefault();

      fetch(`${endpoints.catalogUrl}/${fragranceId}/review`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                    description: values.description,
                    rating: values.rating
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(`/fragrance/${fragranceId}/details`);
            }) 
            .catch(err => console.log(err));
    }
    return (
        <div className={styles["create-form"]}>
        <div className={styles["left-side"]}>
          <img src={image} alt="" />
        </div>

        <div className={styles['right-side']}>
          <form>
              <h1 className={styles['text']}>Create a review</h1>
              <div className="mx-auto max-w-xs">
                <h4 className={styles['subtitle']}>Review description: </h4>
              <textarea name="description" cols="30" rows="10" className={styles.description} value={values.description} onChange={onChangeHandler} placeholder="Enter a review">
              </textarea>
              <h4 className={styles['subtitle']}>Review score: </h4>
              <input type="number" name="rating" className={styles.rating} value={values.rating} onChange={onChangeHandler} placeholder="    [1-5]"/>
            <button type='submit' className={styles["submit-button"]} onClick={submitHandler}>
              <span className="ml-3 text-lg">
                Create
              </span>
            </button>
            </div>
          </form>
        </div>
      </div>
    );
}