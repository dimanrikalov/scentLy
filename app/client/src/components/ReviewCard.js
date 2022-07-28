import styles from './Reviews.module.css'

export default function ReviewCard({reviewDescription, reviewRating, reviewAuthor, authorImage}) {
    return (
          <div className={styles.card}>
            <img src={`../../assets/imgs/rating-${Math.round(reviewRating)}.png`}
                  className={styles.card__image} 
             />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className={styles.card__thumb} src={authorImage} />
                <div className={styles["card__header-text"]}>
                    <h3 className="text-red-500">{reviewAuthor}</h3>
                  <h3 className="mt-2 text-xl text-gray-800"></h3>            
                </div>
              </div>
              <p className={styles.card__description}>"{reviewDescription}"</p>
            </div>
          </div>
    )
}