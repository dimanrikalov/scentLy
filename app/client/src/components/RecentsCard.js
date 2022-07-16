import styles from './Recents.module.css'


export default function RecentsCard(props) {
    return (
          <a href className={styles.card}>
            <img src={props.imageUrl} className={styles.card__image} alt="rating-image" />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className={styles.card__thumb} src={props.authorImageUrl} alt="review-author-image" />
                <div className={styles["card__header-text"]}>
                    <h2 className="text-red-500">{props.name}</h2>
                  <h3 className="text-base text-gray-800">{props.brand}</h3>            
                </div>
              </div>
              <p className={styles.card__description}>{props.description}</p>
              <p className={styles.card__description}>{props.author}</p>
            </div>
          </a>
    )
}