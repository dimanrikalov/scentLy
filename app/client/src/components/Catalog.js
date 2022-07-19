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
            <div className={styles['cards-list']}>
                {   fragrances ?
                    fragrances.map(x => <CatalogCard key={x._id} fragrance={x}/>)
                    : <h1>No fragrances</h1>
                }
                {/* <CatalogCard
                    brand="Amouage"
                    name="Jubilation XXV"
                    imgUrl="https://images.selfridges.com/is/image/selfridges/476-3001290-JUBLTIONXXVMANEDP_M?$PDP_M_ZOOM$"
                />
                <CatalogCard
                    brand="Roja"
                    name="Elyisum"
                    imgUrl="https://cremedelacreme.shop/images/galleries/product_items/1646232306_elysium-creative-kirptas.jpg"
                />
                <CatalogCard
                    brand="Creed"
                    name="Royal Mayfair"
                    imgUrl="http://cdn.shopify.com/s/files/1/0271/3298/5441/products/1110081_RM_100ml_1200x1200.jpg?v=1622643258"
                />
                <CatalogCard
                    brand="Parfums De Marly"
                    name="Layton"
                    imgUrl="https://images.selfridges.com/is/image/selfridges/496-3003325-PM1600PV_M?$PDP_M_ZOOM$"
                />
                <CatalogCard
                    brand="INITIO"
                    name="Side Effect"
                    imgUrl="https://nichegarden.com/wp-content/uploads/2020/05/INITIO-ATOMIC-ROSE-bottel-min.png"
                />
                <CatalogCard
                    brand="Xerjoff"
                    name="Naxos"
                    imgUrl="https://belodore.rs/media/amasty/amoptmobile/catalog/product/cache/08cd9d1a69d3b81aa4ac293076519bc7/X/E/XE33737-1-Xerjoff_Naxos_100ml_EDP_1_jpg.webp"
                /> */}
            </div>
        </div>
    );
}
