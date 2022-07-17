import styles from './EditFragranceForm.module.css';

export default function EditFragranceForm () {
    return (
        <div className={styles["create-form"]}>
          <div className={styles["left-side"]}>
            <img src="https://www.brandedperfume.com/10377-large_default/alexandre-j-golden-oud-eau-de-parfum-100ml.jpg" alt="fragrance-image" />
          </div>

          <div className={styles['right-side']}>
            <h1 className={styles['text']}>Edit fragrance</h1>
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
                  Edit
                </span>
              </button>
              </div>
          </div>
        </div>
    )
}