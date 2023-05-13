import styles from '../../styles/Home.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
        <p className={styles.description}>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation.
        </p>
        <h1 className={styles.code}>Index Page</h1>
        <p>This is the index page content.</p>
        <p onClick={() => navigateToPage('new')}>Go to New Page</p>
      </main>
    </div>
  );
}
