import styles from './CatalogCard.module.css'
import {Link} from 'react-router-dom';

export default function CatalogCard (props) {
    return (
      <Link to='/fragrance/:id'>
        <div className={styles["card"]}>
        <div className={styles["card_image"]}> <img src={props.imgUrl} /> </div>
        <div className={styles["card_title"]}>
          <p className={styles['title-upper']}>{props.brand}</p>
          <p className={styles['title-white']}>{props.name}</p>
        </div>
        </div>
      </Link>
    )
}