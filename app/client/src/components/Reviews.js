import ReviewCard from './ReviewCard';
import styles from './Reviews.module.css'


export default function Reviews({reviews}) {

    return (
        <div className={styles.wrapper}>
        <div className={styles["reviews-div"]}>
        <ul className={styles.cards}>
        {reviews?.map(x => <ReviewCard key={x._id} reviewData={x}/>)}
        </ul>
      </div>
        
      </div>
    );
}
