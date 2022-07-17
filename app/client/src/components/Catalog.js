import mainStyles from './Catalog.module.css';
import styles from './CatalogCard.module.css';
import CatalogCard from './CatalogCard';

export default function Catalog () {
    return(
        <div id="catalog">
            <h1 style={{width:'75%'}} className="text-red-500 mt-20 ml-20">Catalog: </h1>
            <input className={mainStyles.input} type="text" name="catalogSearch" placeholder="Search for a fragrance"/>
            <div className={styles["cards-list"]}>
                <CatalogCard brand="Amouage" name="Jubilation XXV" imgUrl="https://images.selfridges.com/is/image/selfridges/476-3001290-JUBLTIONXXVMANEDP_M?$PDP_M_ZOOM$"/>
                <CatalogCard brand="Creed" name="Royal Mayfair" imgUrl="http://cdn.shopify.com/s/files/1/0271/3298/5441/products/1110081_RM_100ml_1200x1200.jpg?v=1622643258"/>
                <CatalogCard brand="Parfums De Marly" name="Layton" imgUrl="https://images.selfridges.com/is/image/selfridges/496-3003325-PM1600PV_M?$PDP_M_ZOOM$"/>
                <CatalogCard brand="Roja" name="Elyisum" imgUrl="https://cremedelacreme.shop/images/galleries/product_items/1646232306_elysium-creative-kirptas.jpg"/>
                <CatalogCard brand="INITIO" name="Side Effect" imgUrl="https://nichegarden.com/wp-content/uploads/2020/05/INITIO-ATOMIC-ROSE-bottel-min.png"/>
                <CatalogCard brand="Xerjoff" name="Naxos" imgUrl="https://belodore.rs/media/amasty/amoptmobile/catalog/product/cache/08cd9d1a69d3b81aa4ac293076519bc7/X/E/XE33737-1-Xerjoff_Naxos_100ml_EDP_1_jpg.webp"/>
            </div>
        </div>
    )
}