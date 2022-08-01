import endpoints from '../endpoints';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateFragranceForm.module.css';
import { UserContext } from '../contexts/UserContext';


export default function CreateFragranceForm() {
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const [nameHasError, setNameHasError] = useState('');
    const [brandHasError, setBrandHasError] = useState('');
    const [imageUrlHasError, setImageUrlHasError] = useState('');
    const [topNotesHasError, setTopNotesHasError] = useState('');
    const [baseNotesHasError, setBaseNotesHasError] = useState('');
    const [middleNotesHasError, setMiddleNotesHasError] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        name: '',
        brand: '',
        creator: '',
        imageUrl: '',
        topNotes: '',
        baseNotes: '',
        middleNotes: '',
    });

    const changeHandler = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const validateName = () => {
        if (values.name.length === 0) {
            setNameHasError(true);
        } else {
            setNameHasError(false);
        }
    };

    const validateBrand = () => {
        if (values.brand.length < 2) {
            setBrandHasError(true);
        } else {
            setBrandHasError(false);
        }
    };
    const validateImageUrl = () => {
        if (
            values.imageUrl.startsWith('http://') ||
            values.imageUrl.startsWith('https://')
        ) {
            setImageUrlHasError(false);
        } else {
            setImageUrlHasError(true);
        }
    };

    const validateTopNotes = () => {
        if (values.topNotes === '') {
            setTopNotesHasError(true);
        } else {
            setTopNotesHasError(false);
        }
    };

    const validateMiddleNotes = () => {
        if (values.middleNotes === '') {
            setMiddleNotesHasError(true);
        } else {
            setMiddleNotesHasError(false);
        }
    };

    const validateBaseNotes = () => {
        if (values.baseNotes === '') {
            setBaseNotesHasError(true);
        } else {
            setBaseNotesHasError(false);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${endpoints.catalogUrl}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    author: user._id,
                    topNotes: values.topNotes.split(', '),
                    baseNotes: values.baseNotes.split(', '),
                    middleNotes: values.middleNotes.split(', ')
                }),
            });
            const response = await res.json();
            if(response.message !== 'Successfully created!') {
                setErrorMessage(response.message);
            } else {
                setUser(response.user);
                navigate('/catalog');
            }
        } catch (err) {
            setErrorMessage('Connection error! Try again later!');
        }
    };

    return (
        <div id="create" className={styles['create-form']}>
            <div className={styles['left-side']}>
                <img
                    className={styles.img}
                    src="https://plummour.com/wp-content/uploads/2021/07/Xerjoff-Casamorati-1888-7.jpg"
                />
            </div>

            <div className={styles['right-side']}>
                <h1 className={styles['text']}>Add a new fragrance</h1>
                {errorMessage && <h3 className={[styles['error-message'], 'pb-3'].join(' ')}>{errorMessage}</h3>}
                <div className="mx-auto max-w-xs">
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance name"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                        onBlur={validateName}
                    />
                    {nameHasError && <p className={styles['error-message']}>Enter a valid fragrance name!</p>}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance brand"
                        name="brand"
                        value={values.brand}
                        onChange={changeHandler}
                        onBlur={validateBrand}
                    />
                    {brandHasError && <p className={styles['error-message']}>Enter a valid fragrance brand!</p>}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Fragrance creator (Not required)"
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
                        onBlur={validateImageUrl}
                    />
                    {imageUrlHasError && <p className={styles['error-message']}>Enter a valid image URL!</p>}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Top notes (split by a ', ')"
                        name="topNotes"
                        value={values.topNotes}
                        onChange={changeHandler}
                        onBlur={validateTopNotes}
                    />
                    {topNotesHasError && <p className={styles['error-message']}>Enter valid top notes!</p>}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Mid notes (split by a ', ')"
                        name="middleNotes"
                        value={values.middleNotes}
                        onChange={changeHandler}
                        onBlur={validateMiddleNotes}
                    />
                    {middleNotesHasError && <p className={styles['error-message']}>Enter valid middle notes!</p>}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Base notes (split by a ', ')"
                        name="baseNotes"
                        value={values.baseNotes}
                        onChange={changeHandler}
                        onBlur={validateBaseNotes}
                    />
                    {baseNotesHasError && <p className={styles['error-message']}>Enter valid base notes!</p>}
                    <button
                        className={styles['submit-button']}
                        onClick={submitHandler}
                        disabled={
                            !user ||
                            !values.name ||
                            !values.brand ||
                            !values.imageUrl ||
                            !values.topNotes ||
                            !values.middleNotes ||
                            !values.baseNotes ||
                            nameHasError ||
                            brandHasError ||
                            imageUrlHasError ||
                            topNotesHasError ||
                            middleNotesHasError ||
                            baseNotesHasError
                        }
                    >
                        <span className="ml-3 text-lg">Create</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
