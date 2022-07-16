import ReviewsCard from './ReviewCard';
import styles from './Reviews.module.css'


export default function Reviews() {
    return (
        <div className={styles.wrapper}>
        <div className={styles["reviews-div"]}>
        <ul className={styles.cards}>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" brand="Amouage" author="Charles Leclerc" description="My absolute favourite from the brand!" imageUrl="https://color.adobe.com/media/theme/92471.png" authorImageUrl="../assets/imgs/avatar1.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" brand="Amouage" author="Patrick Bateman" description="Let's see Paul Allen's fragrance!" imageUrl="https://color.adobe.com/media/theme/92471.png" authorImageUrl="../assets/imgs/avatar2.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" brand="Amouage" author="James Bond" description="It's Herod. PDM Herod." imageUrl="https://color.adobe.com/media/theme/92471.png" authorImageUrl="../assets/imgs/avatar3.jpg"/></li>
        <li className={styles.card}><ReviewsCard name="Jubilation XXV" brand="Amouage" author="Robert De Niro" description="Too boring for me..." imageUrl="https://color.adobe.com/media/theme/92471.png" authorImageUrl="../assets/imgs/avatar4.jpg"/></li>
        </ul>
      </div>
        
      </div>
    );
}
