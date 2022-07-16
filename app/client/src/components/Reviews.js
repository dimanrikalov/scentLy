import ReviewsCard from './ReviewCard';
import styles from './Reviews.module.css'


export default function Reviews() {
    return (
        <div className={styles.wrapper}>
        <div className={styles["reviews-div"]}>
        <ul className={styles.cards}>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" author="Charles Leclerc" description="My absolute favourite from the brand!" imageUrl="../assets/imgs/rating-5.png" authorImageUrl="../assets/imgs/avatar1.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" author="Patrick Bateman" description="Let's see Paul Allen's fragrance!" imageUrl="../assets/imgs/rating-2.png" authorImageUrl="../assets/imgs/avatar2.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" author="James Bond" description="It's Herod. PDM Herod." imageUrl="../assets/imgs/rating-3.png" authorImageUrl="../assets/imgs/avatar3.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" author="Robert De Niro" description="Too boring for me..." imageUrl="../assets/imgs/rating-4.png" authorImageUrl="../assets/imgs/avatar4.jpg"/></li>
        </ul>
      </div>
        
      </div>
    );
}
