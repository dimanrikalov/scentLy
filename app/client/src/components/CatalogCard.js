import { Link } from 'react-router-dom';
import styles from './CatalogCard.module.css';


export default function CatalogCard({ fragrance }) {
    return (
        <Link to={`/fragrance/${fragrance._id}/details`}>
            <div className={styles['card']}>
                <div className={styles['card_image']}>
                    {' '}
                    <img src={fragrance.imageUrl} alt='' />{' '}
                </div>
                <div className={styles['card_title']}>
                    <p className={styles['title-upper']}>{fragrance.brand}</p>
                    <p className={styles['title-white']}>{fragrance.name}</p>
                </div>
            </div>
        </Link>
    );
}
