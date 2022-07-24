import styles from './Owned.module.css';
import OwnedCard from './OwnedCard';

export default function Reviewed({reviewed}) {
    return (
        <div className="ownedDiv">
            <div className={styles['cards-list']}>
                {reviewed ?
                    reviewed.map(x => <OwnedCard key={x._id} imgUrl={x.imageUrl} _id={x.fragrance} />)
                    :
                    <><h3 className={styles['empty-list']}>The list is empty!</h3></>
               }
            </div>
        </div>
    );
}
