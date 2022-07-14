import RecentsCard from './RecentsCard';
import styles from './Recents.module.css'


export default function Recents() {
    return (
        <div className={styles.wrapper}>
          <br /><br />
    
        <h1 style={{margin:'auto', width:'50%'}} className="text-red-500">Recent reviews: </h1>
        <ul className={styles.cards}>

        <RecentsCard name="Side Effect" brand="Initio" author="Charles Leclerc" description="My absolute favourite from the brand!" imageUrl="../assets/imgs/img-1.jpg" authorImageUrl="../assets/imgs/avatar1.jpg"/>
        <RecentsCard name="Matsukita" brand="Clive Christian" author="Patrick Bateman" description="Let's see Paul Allen's fragrance!" imageUrl="../assets/imgs/img-2.jpg" authorImageUrl="../assets/imgs/avatar2.jpg"/>
        <RecentsCard name="Herod" brand="Parfums De Marly" author="James Bond" description="It's Herod. PDM Herod." imageUrl="../assets/imgs/img-3.jpg" authorImageUrl="../assets/imgs/avatar3.jpg"/>
        <RecentsCard name="Baccarat Rouge 540 Extrait" brand="Maison Francis Kurkdjian" author="Robert De Niro" description="Too boring for me..." imageUrl="../assets/imgs/img-4.jpg" authorImageUrl="../assets/imgs/avatar4.jpg"/>
        
      </ul>
      </div>
    );
}
