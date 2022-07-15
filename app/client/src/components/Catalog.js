import styles from './CatalogCard.module.css';
import CatalogCard from './CatalogCard';

export default function Catalog () {
    return(
        <div>
            <h1 style={{width:'75%'}} className="text-red-500 mt-20 ml-20">Catalog: </h1>
            <div className={styles["cards-list"]}>
                <CatalogCard  name="Herod" imgUrl="https://cremedelacreme.shop/cache/images/8f661392d14c63683d746ad55058fb8a/pdm-h-small-bottle-packshot-with-box.jpg"/>
                <CatalogCard  name="Overture Man" imgUrl="https://cdn.shoplightspeed.com/shops/611681/files/39984173/image.jpg"/>
                <CatalogCard  name="Royal Oud" imgUrl="https://www.creedfragrances.co.uk/static/media/catalog/product/r/o/royal-oud-100ml_1.jpg"/>
                <CatalogCard  name="Overture Man" imgUrl="https://cdn.shoplightspeed.com/shops/611681/files/39984173/image.jpg"/>
                <CatalogCard  name="Royal Oud" imgUrl="https://www.creedfragrances.co.uk/static/media/catalog/product/r/o/royal-oud-100ml_1.jpg"/>
            </div>
        </div>
    )
}