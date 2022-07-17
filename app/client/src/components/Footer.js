import styles from './Footer.module.css';
import {Link} from 'react-router-dom';
export default function Footer (porps) {
    return (
          <footer className={styles['footer-distributed']}>
          <div className={styles['footer-left']}>
            <p className={styles['footer-links']}>
              <Link className={styles['link-1']} to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/auth/register">Register</Link>
              <Link to="/auth/login">Login</Link>
              <Link to="/about">About</Link>
              <Link to="/fragrance/create">Create</Link>
              <a href="https://linktr.ee/dimanrikalov">Linktree</a>
            </p>
            <p className="author"><strong>Diman Rikalov ® 2022</strong></p>
          </div>
        </footer>
    )
}