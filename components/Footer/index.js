import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ibnzUK/next-chrome-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Footer V.0.0.1
        <span className={styles.logo}>
          <img
            src="icons/favicon-32x32.png"
            alt="Logo"
            width={16}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
