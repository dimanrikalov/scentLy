import styles from './CatalogCard.module.css';
import CatalogCard from './CatalogCard';

export default function Catalog () {
    return(
        <div>
            <h1 style={{width:'75%'}} className="text-red-500 mt-20 ml-20">Catalog: </h1>
            
            <input className="w-1/3 ml-32 mt-10 mb-10 px-8 py-3 rounded-3xl text-lg font-lg bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:bg-white" type="text" name="catalogSearch" placeholder="Search for a fragrance"/>
            <div className={styles["cards-list"]}>
                <CatalogCard brand="Parfums De Marly" name="Herod" imgUrl="https://cremedelacreme.shop/cache/images/8f661392d14c63683d746ad55058fb8a/pdm-h-small-bottle-packshot-with-box.jpg"/>
                <CatalogCard brand="Amouage" name="Overture Man" imgUrl="https://cdn.shoplightspeed.com/shops/611681/files/39984173/image.jpg"/>
                <CatalogCard brand="Creed" name="Royal Oud" imgUrl="https://www.creedfragrances.co.uk/static/media/catalog/product/r/o/royal-oud-100ml_1.jpg"/>
                <CatalogCard brand="Xerjoff" name="Naxos" imgUrl="https://belodore.rs/media/amasty/amoptmobile/catalog/product/cache/08cd9d1a69d3b81aa4ac293076519bc7/X/E/XE33737-1-Xerjoff_Naxos_100ml_EDP_1_jpg.webp"/>
                <CatalogCard brand="Roja" name="Elyisum" imgUrl="https://cremedelacreme.shop/images/galleries/product_items/1646232306_elysium-creative-kirptas.jpg"/>
                <CatalogCard brand="INITIO" name="" imgUrl="https://nichegarden.com/wp-content/uploads/2020/05/INITIO-ATOMIC-ROSE-bottel-min.png"/>
            </div>
        </div>
    )
}