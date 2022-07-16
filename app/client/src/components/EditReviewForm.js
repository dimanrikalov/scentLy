import styles from './EditReviewForm.module.css';

export default function EditReviewForm () {
    return (
        <div className={styles["create-form"]}>
        <div className={styles["left-side"]}>
          <img src="https://fimgs.net/mdimg/perfume/375x500.6472.jpg" alt="fragrance-image" />
        </div>

        <div className={styles['right-side']}>
          <h1 className={styles['text']}>Edit review</h1>
          <div className="mx-auto max-w-xs">
            <h4 className={styles['subtitle']}>Review description: </h4>
          <textarea name="fragranceReview" cols="30" rows="10" className={styles.description} placeholder="Enter a review">
          </textarea>
          <h4 className={styles['subtitle']}>Review score: </h4>
          <input type="number" name="fragranceRating" className={styles.rating} placeholder="    [1-5]"/>

            <button className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-3xl hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <span className="ml-3 text-lg">
                Edit
              </span>
            </button>
            </div>
        </div>
      </div>
    );
}