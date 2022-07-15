import styles from './Owned.module.css';
import CatalogCard from './CatalogCard';

export default function Owned (props) {
    return(
        <div className='ownedDiv'>
            <div className={styles["cards-list"]}>
                <CatalogCard  imgUrl="https://cremedelacreme.shop/cache/images/8f661392d14c63683d746ad55058fb8a/pdm-h-small-bottle-packshot-with-box.jpg"/>
                <CatalogCard  imgUrl="https://cdn.shoplightspeed.com/shops/611681/files/39984173/image.jpg"/>
                <CatalogCard  imgUrl="https://www.creedfragrances.co.uk/static/media/catalog/product/r/o/royal-oud-100ml_1.jpg"/>
                <CatalogCard  imgUrl="https://cdn.shoplightspeed.com/shops/611681/files/39984173/image.jpg"/>
                <CatalogCard  imgUrl="https://www.creedfragrances.co.uk/static/media/catalog/product/r/o/royal-oud-100ml_1.jpg"/>
            </div>
        </div>
    )
}