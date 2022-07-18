import styles from './CreateFragranceForm.module.css';
import { useState } from 'react';
import endpoints from '../endpoints';

export default function CreateFragranceForm() {
    const [values, setValues] = useState({
        name: '',
        brand: '',
        creator: '',
        imageUrl: '',
        topNotes: '',
        middleNotes: '',
        baseNotes: '',
    });

    const changeHandler = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await fetch(`${endpoints.catalogUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...values,
                topNotes: values.topNotes.split(', '),
                middleNotes: values.middleNotes.split(', '),
                baseNotes: values.baseNotes.split(', '),
            }),
        });
    };

    return (
        <div id="create" className={styles['create-form']}>
            <div className={styles['left-side']}>
                <img
                    className={styles['form-img']}
                    src="https://plummour.com/wp-content/uploads/2021/07/Xerjoff-Casamorati-1888-7.jpg"
                    alt="fragrance-image"
                />
            </div>

            <div className={styles['right-side']}>
                <h1 className={styles['text']}>Add a new fragrance</h1>
                <div className="mx-auto max-w-xs">
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance name"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance brand"
                        name="brand"
                        value={values.brand}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance creator"
                        name="creator"
                        value={values.creator}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="url"
                        placeholder="Image URL (starts with 'http:')"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Top notes (split by a ', ')"
                        name="topNotes"
                        value={values.topNotes}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Mid notes (split by a ', ')"
                        name="middleNotes"
                        value={values.middleNotes}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Base notes (split by a ', ')"
                        name="baseNotes"
                        value={values.baseNotes}
                        onChange={changeHandler}
                    />

                    <button
                        className={styles['submit-button']}
                        onClick={submitHandler}
                    >
                        <span className="ml-3 text-lg">Create</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
