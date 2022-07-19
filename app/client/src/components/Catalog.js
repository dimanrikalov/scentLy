import { useEffect, useState } from 'react';
import endpoints from '../endpoints';
import CatalogCard from './CatalogCard';
import mainStyles from './Catalog.module.css';
import styles from './CatalogCard.module.css';

export default function Catalog() {
    
    let [fragrances, setFragrances] = useState([]);

    useEffect( () => {
        fetch(endpoints.catalogUrl)
            .then(res => res.json())
            .then(serverFragrances => setFragrances(serverFragrances)); 
    })

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
                placeholder="Search for a fragrance"
            />

            {
                fragrances.length > 0 ?
                <div className={styles['cards-list']}>
                {   
                    fragrances.map(x => <CatalogCard key={x} fragrance={x}/>)
                
                }
                </div>
                : <h1 className = {mainStyles['no-fragrances']}>No fragrances in database yet.</h1>
            }
        </div>
    );
}
