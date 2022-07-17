import styles from './CreateFragranceForm.module.css';

export default function CreateFragranceForm () {
    return (
        <div id="create" className={styles["create-form"]}>
          <div className={styles["left-side"]}>
            <img src="https://plummour.com/wp-content/uploads/2021/07/Xerjoff-Casamorati-1888-7.jpg" alt="fragrance-image" />
          </div>

          <div className={styles['right-side']}>
            <h1 className={styles['text']}>Add a new fragrance</h1>
            <div className="mx-auto max-w-xs">
            <input className={styles.input} type="text" placeholder="Fragrance name" />
            <input className={styles.input} type="text" placeholder="Fragrance brand"/>
            <input className={styles.input} type="text" placeholder="Fragrance creator"/>
            <input className={styles.input} type="url" placeholder="Image URL (starts with http)"/>
            <input className={styles.input} type="text" placeholder="Top notes (split by a comma)"/>
            <input className={styles.input} type="text" placeholder="Mid notes (split by a comma)"/>
            <input className={styles.input} type="text" placeholder="Base notes (split by a comma)"/>

              <button className={styles['submit-button']}>
                <span className="ml-3 text-lg">
                  Create
                </span>
              </button>
              </div>
          </div>
        </div>
    )
}