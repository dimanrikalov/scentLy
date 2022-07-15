import styles from './Owned.module.css'

export default function OwnedCard (props) {
    return (
      <div className={styles["card"]}>
      <div className={styles["card_image"]}> <img src={props.imgUrl} /> </div>
      <div className={styles["card_title"]}>
        <p className={styles['title-white']}>{props.name}</p>
      </div>
    </div>
    )
}