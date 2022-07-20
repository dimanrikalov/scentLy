import { useEffect, useState } from 'react';
import endpoints from '../endpoints';
import CatalogCard from './CatalogCard';
import mainStyles from './Catalog.module.css';
import styles from './CatalogCard.module.css';

export default function Catalog() {
    
    const [fragrances, setFragrances] = useState([]);
    const [searchValue, setSearchValue] = useState({
        catalogSearch: ''
    });

    useEffect( () => {
        fetch(endpoints.catalogUrl)
            .then(res => res.json())
            .then(serverFragrances => setFragrances(serverFragrances)); 
    }, [])

    const onChangeHandler = (e) => {
        setSearchValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`${endpoints.catalogUrl}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchValue)
        })
        .then(res => res.json())
        .then(data => setFragrances(data));
    }

    return (
        <div className={mainStyles.background}>
            <h1
                style={{ width: '75%' }}
                className="text-red-500 mt-10 ml-20 pt-16"
            >
                Catalog:{' '}
            </h1>
            <input
                className={mainStyles.input}
                type="text"
                name="catalogSearch"
                value={searchValue.searchInput}
                onChange={onChangeHandler}
                placeholder="Search for a fragrance"
            />
            <button type="submit" className={mainStyles["search-button"]} onClick={onSubmitHandler}>Search</button>
            {
                fragrances.length > 0 ?
                <div className={styles['cards-list']}>
                {   
                    fragrances.map(x => <CatalogCard key={x._id} fragrance={x}/>)
                
                }
                </div>
                : <h1 className = {mainStyles['no-fragrances']}>No fragrances in database yet.</h1>
            }
        </div>
    );
}
