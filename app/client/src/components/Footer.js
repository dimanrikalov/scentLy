import styles from './Footer.module.css';

export default function Footer (porps) {
    return (
          <footer className={styles['footer-distributed']}>
          <div className={styles['footer-left']}>
            <p className={styles['footer-links']}>
              <a className={styles['link-1']} href="/">Home</a>
              <a href="/catalog">Catalog</a>
              <a href="/auth/register">Register</a>
              <a href="/auth/login">Login</a>
              <a href="/about">About</a>
              <a href="/fragrance/create">Create</a>
              <a href="https://linktr.ee/dimanrikalov">Linktree</a>
            </p>
            <p className="author"><strong>Diman Rikalov ® 2022</strong></p>
          </div>
        </footer>
    )
}