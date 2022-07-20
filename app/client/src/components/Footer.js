import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles['footer-distributed']}>
            <div className={styles['footer-left']}>
                <p className={styles['footer-links']}>
                    <Link className={styles['link-1']} to="/">
                        Home
                    </Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/auth/register">Register</Link>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/fragrance/create">Create</Link>
                </p>
                <a href="https://linktr.ee/dimanrikalov">
                    <p className="author">
                        <strong>Diman Rikalov ® 2022</strong>
                    </p>
                </a>
            </div>
        </footer>
    );
}
