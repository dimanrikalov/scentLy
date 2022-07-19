import styles from './FragranceDetails.module.css';
import Reviews from './Reviews.js';
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import endpoints from '../endpoints';

export default function FragranceDetails () {

    const { fragranceId } = useParams();
    const [fragrance, setFragrance] = useState({});

    useEffect(() => {
        async function getFragranceDetails () {
            const res = await fetch(`${endpoints.catalogUrl}/${fragranceId}/details`);
            const result = await res.json();
            setFragrance(result);
            return res;
        }

        getFragranceDetails();
        console.log()
    }, [fragranceId])    

    console.log(fragrance);

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
                        fragrance.rating > 0
                        ? ` ${fragrance.rating}`
                        : ' No reviews yet'
                    }
                    </h2>
                </div>

                <div className={styles['review-div']}>
                    <Reviews />
                </div>

                <div className={styles['button-div']}>
                    <Link to={`/fragrance/${fragrance._id}/edit`} className={styles.button}>Edit</Link>
                    <Link to={`/fragrance/${fragrance._id}/delete`} className={styles.button}>Delete</Link>
                    <Link to={`/fragrance/${fragrance._id}/review`} className={styles.button}>Review</Link>
                </div>
            </div>
        </div>
    )
}