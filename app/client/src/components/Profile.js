import Owned from "./Owned"
import styles from './Profile.module.css';

export default function Profile () {
    return (
       <div className={styles['profilePage']}>
        <div className={styles['profileDiv']}>
        
        <h1>Diman Rikalov</h1>

        <img className={styles.profileImg} src="../assets/imgs/avatar1.jpg" alt="profile-pic" />
          
          <div>
            <h2 className="pb-3">Profile Information:</h2>
            <ul>
              <li><h5>Age: 21</h5></li>
              <li><h5>Gender: Male</h5></li>
              <li><h5>Location: Plovdiv, Bulgaria</h5></li>
              <li><h5>Fragrances owned: 15</h5></li>
              <li><h5>Review count: 47</h5></li>
            </ul>
          </div>

        </div>
        <div className={styles.collections}>
        <h2 className="ml-20 mt-16 mb-3">Owned fragrances:</h2>
          <div className={styles.profileOwned}>
            <Owned />
          </div>
          <h2 className="ml-20 mt-32 mb-3">Reviewed fragrances:</h2>
          <div className={styles.profileReviews}>
            <Owned />
          </div>
        </div>
       
       </div>
    )
}