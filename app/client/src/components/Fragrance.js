import styles from './Fragrance.module.css';
import Recents from './Recents';
export default function Fragrance () {
    return (
        <div className={styles.main}>
            <div className={styles["left-side"]}>
                <img src="https://cdn.amouage.com/production/media/catalog/product/cache/c45c22584d6bdad8628cacfa66591d7f/j/u/jubilation_bottle_front_man_00000.png" alt=""/>
            </div>

            <div className={styles["right-side"]}>
                <h2>Name: Jubilation XXV</h2>
                <h2>Brand: Amouage</h2>
                <h2 className="mb-3">Creator: Bertrand Douchafour</h2>

                <h2>Top notes:</h2>
                <div className="mb-3 font-medium text-gray-700">
                    Blackberry, Orange, Olibanum
                </div>
                <h2>Middle notes:</h2>
                <div className="mb-3 font-medium text-gray-700">Honey, Guaiac Wood, Clove</div>
                <h2>Base notes:</h2>
                <div className="mb-3 font-medium text-gray-700">
                    Oud, Ambergris, Musk
                </div>
                <h2>Average rating: 5.00</h2>
                <div className={styles.recents}>
             
                </div>

                <div>
                    <button className={styles.button}>Edit</button>
                    <button className={styles.button}>Delete</button>
                    <button className={styles.button}>Review</button>
                </div>
            </div>
        </div>
    )
}