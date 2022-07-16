import styles from './Footer.module.css';

export default function Footer () {
    return (
        <footer className={styles['footer-distributed']}>
          <div className="footer-right">
          <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-github" /></a>
          </div>
          <div className={styles['footer-left']}>
            <p className={styles['footer-links']}>
              <a className={styles['link-1']} href="#">Home</a>
              <a href="#catalog">Catalog</a>
              <a href="#register">Register</a>
              <a href="#login">Login</a>
              <a href="#about">About</a>
              <a href="https://linktr.ee/dimanrikalov">Linktree</a>
            </p>
            <p className="author"><strong>Diman Rikalov ® 2022</strong></p>
          </div>
        </footer>
    )
}