import { useEffect, useState } from 'react';
import styles from './EditFragranceForm.module.css';
import endpoints from '../endpoints';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditFragranceForm() {

    const { fragranceId } = useParams();

    const navigate = useNavigate();

    const [image, setImage] = useState('');

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
      
      await fetch(`${endpoints.catalogUrl}/${fragranceId}/edit`, {
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

      navigate(`/fragrance/${fragranceId}/details`);
    };

    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
            .then((res) => res.json())
            .then((data) => {
                setValues({
                    ...data,
                    topNotes: data.topNotes.join(', '),
                    middleNotes: data.middleNotes.join(', '),
                    baseNotes: data.baseNotes.join(', '),
                });
                setImage(data.imageUrl);
            });
    }, [fragranceId]);


    return (
        <div className={styles['create-form']}>
            <div className={styles['left-side']}>
                <img src={image} alt="fragrance-image" />
            </div>

            <div className={styles['right-side']}>
                <h1 className={styles['text']}>Edit fragrance</h1>
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
                        onChange={changeHandler}
                        type="text"
                        placeholder="Fragrance brand"
                        name="brand"
                        value={values.brand}
                        className={styles.input}
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
                        onChange={changeHandler}
                        type="url"
                        placeholder="Image URL (starts with http)"
                        name="imageUrl"
                        className={styles.input}
                        value={values.imageUrl}
                    />
                    <input
                        onChange={changeHandler}
                        type="text"
                        placeholder="Top notes (split by a comma)"
                        name="topNotes"
                        className={styles.input}
                        value={values.topNotes}
                    />
                    <input
                        onChange={changeHandler}
                        type="text"
                        placeholder="Mid notes (split by a comma)"
                        name="middleNotes"
                        value={values.middleNotes}
                        className={styles.input}
                    />
                    <input
                        onChange={changeHandler}
                        type="text"
                        placeholder="Base notes (split by a comma)"
                        name="baseNotes"
                        className={styles.input}
                        value={values.baseNotes}
                    />

                    <button
                        className={styles['submit-button']}
                        onClick={submitHandler}
                    >
                        <span className="ml-3 text-lg">Edit</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
