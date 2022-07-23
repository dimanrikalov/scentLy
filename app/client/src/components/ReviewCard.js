import styles from './Reviews.module.css'

export default function ReviewCard({reviewData}) {
    return (
          <div className={styles.card}>
            <img src={`../../assets/imgs/rating-${Math.round(reviewData.rating)}.png`}
                  className={styles.card__image} 
             />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className={styles.card__thumb} src={reviewData.author.profileImage} />
                <div className={styles["card__header-text"]}>
                    <h3 className="text-red-500">{reviewData.author}</h3>
                  <h3 className="mt-2 text-xl text-gray-800">{reviewData.name}</h3>            
                </div>
              </div>
              <p className={styles.card__description}>{reviewData.description}</p>
            </div>
          </div>
    )
}