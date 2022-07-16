import styles from './Reviews.module.css'


export default function ReviewCard(props) {
    return (
          <a href className={styles.card}>
            <img src={props.imageUrl} className={styles.card__image} alt="rating-image" />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className={styles.card__thumb} src={props.authorImageUrl} alt="author-image" />
                <div className={styles["card__header-text"]}>
                    <h3 className="text-red-500">{props.author}</h3>
                  <h3 className="text-base text-gray-800">{props.name}</h3>            
                </div>
              </div>
              <p className={styles.card__description}>{props.description}</p>
            </div>
          </a>
    )
}