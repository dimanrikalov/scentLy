import styles from './CreateFragranceForm.module.css';

export default function CreateFragranceForm () {
    return (
        <div id="create" className={styles["create-form"]}>
          <div className={styles["left-side"]}>
            <img src="https://plummour.com/wp-content/uploads/2021/07/Xerjoff-Casamorati-1888-7.jpg" alt="" />
          </div>

          <div className={styles['right-side']}>
            <h1 className={styles['text']}>Add a new fragrance</h1>
            <div className="mx-auto max-w-xs">
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Fragrance name" />
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Fragrance brand"/>
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Fragrance creator"/>
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="url" placeholder="Image URL (starts with http)"/>
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Top notes (split by a comma)"/>
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Mid notes (split by a comma)"/>
            <input className="w-full px-8 py-3 mb-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Base notes (split by a comma)"/>

              <button className="mt-3 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-3xl hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span className="ml-3 text-lg">
                  Create
                </span>
              </button>
              </div>
          </div>
        </div>
    )
}