import styles from './Fragrance.module.css';
import Reviews from './Reviews.js';
import {Link} from 'react-router-dom';

export default function Fragrance () {
    return (
        <div className={styles.main}>
            <div className={styles["left-side"]}>
                <h2 className={styles["title-text"]}>Name: Jubilation XXV</h2>
                <h2 className={styles["title-text"]}>Brand: Amouage</h2>
                <h2 className={styles["title-text"]}>Creator: Bertrand Douchafour</h2>
                <img className={styles.image} src="https://cdn.amouage.com/production/media/catalog/product/cache/c45c22584d6bdad8628cacfa66591d7f/j/u/jubilation_bottle_front_man_00000.png" alt="fragrance-image"/>
            </div>

            <div className={styles["right-side"]}>
                
                <div className={styles["right-text"]}>
                    <h2 className={styles["right-side-margin"]}>Top notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">
                        Blackberry, Orange, Olibanum
                    </div>
                    <h2>Middle notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">Honey, Guaiac Wood, Clove</div>
                    <h2>Base notes:</h2>
                    <div className="mb-3 font-medium text-gray-700">
                        Oud, Ambergris, Musk
                    </div>
                    <h2 className="mt-5">Average rating: 5.00</h2>
                </div>

                <div className={styles['review-div']}>
                    <Reviews />
                </div>

                <div className={styles['button-div']}>
                    <Link to='/fragrance/:id/edit' className={styles.button}>Edit</Link>
                    <Link to='/fragrance/:id/delete' className={styles.button}>Delete</Link>
                    <Link to='/fragrance/:id/review' className={styles.button}>Review</Link>
                </div>
            </div>
        </div>
    )
}