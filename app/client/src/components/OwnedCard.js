import styles from './Owned.module.css'
import {Link} from 'react-router-dom';

export default function OwnedCard (props) {
    return (
      <Link to={`/fragrance/${props._id}/details`}>
        <div className={styles["card"]}>
          <div className={styles["card_image"]}>
             <img src={props.imgUrl} /> 
          </div>
          <div className={styles["card_title"]}>
            <p className={styles['title-white']}>{props.name}</p>
          </div>
        </div>
      </Link>
    )
}