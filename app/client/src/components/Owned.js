import OwnedCard from './OwnedCard';
import styles from './Owned.module.css';


export default function Owned({ownedFragrances}) {
    return (
        <div className="ownedDiv">
            <div className={styles['cards-list']}>
                {ownedFragrances ?
                    ownedFragrances.map(x => <OwnedCard key={x._id} imgUrl={x.imageUrl} _id={x._id} />)
                    :
                    <><h3 className={styles['empty-list']}>The list is empty!</h3></>
               }
            </div>
        </div>
    );
}
