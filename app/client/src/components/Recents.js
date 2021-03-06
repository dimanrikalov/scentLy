import RecentsCard from './RecentsCard';
import styles from './Recents.module.css';


export default function Recents({ reviews }) {
    return (
        <div className={styles.wrapper}>
            <h1
                style={{ margin: 'auto', width: '75%' }}
                className="text-red-500 pt-12 pb-4"
            >
                Recent reviews:
            </h1>

            <div className={styles['recents-div']}>
                <ul className={styles.cards}>
                    {reviews?.map((x) => {
                        return (
                            <li className={styles.card} key={x._id}>
                                <RecentsCard
                                    _id={x.fragrance._id}
                                    name={x.fragrance.name}
                                    brand={x.fragrance.brand}
                                    author={x.author.name}
                                    description={x.description}
                                    imageUrl={x.fragrance.imageUrl}
                                    authorImageUrl={x.author.profileImage}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
