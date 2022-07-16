import styles from './CreateReviewForm.module.css';

export default function CreateReviewForm () {
    return (
        <div className={styles["create-form"]}>
        <div className={styles["left-side"]}>
          <img src="https://lifestyleperfume.am/images/product/1430/1647118645-1009326.webp" alt="" />
        </div>

        <div className={styles['right-side']}>
          <h1 className={styles['text']}>Create a review</h1>
          <div className="mx-auto max-w-xs">
            <h4 className={styles['subtitle']}>Review description: </h4>
          <textarea name="fragranceReview" cols="30" rows="10" className={styles.description} placeholder="Enter a review">
          </textarea>
          <h4 className={styles['subtitle']}>Review score: </h4>
          <input type="number" name="fragranceRating" className={styles.rating} placeholder="    [1-5]"/>

            <button className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-3xl hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <span className="ml-3 text-lg">
                Create
              </span>
            </button>
            </div>
        </div>
      </div>
    );
}