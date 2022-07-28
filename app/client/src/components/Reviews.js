import ReviewCard from './ReviewCard';
import styles from './Reviews.module.css';


export default function Reviews({ reviews }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles['reviews-div']}>
                <ul className={styles.cards}>
                    {reviews?.map((x) => (
                        <ReviewCard 
                            key={x._id}
                            reviewDescription={x.description}
                            reviewRating = {x.rating}
                            reviewAuthor = {x.author.name}
                            authorImage = {x.author.profileImage}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
