import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
        <p className={styles.description}>This is an example of Browser Extension built with NEXT.JS. Please reffer to github repo for running instructions and documentation </p>
      
          <code className={styles.code}>pages/index.js</code>
     
        <Link
          href={process.env.NODE_ENV === 'development' ? '/NewPage' : '/NewPage.html'}
        >
          <p>Go To New Page</p>
        </Link>
      </main>
    </div>
  );
}
