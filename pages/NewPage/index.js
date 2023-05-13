import Link from 'next/link';
import styles from './NewPage.module.css';

export default function NewPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
        <code className={styles.code}>pages/NewPage/index.js</code>
        <Link
          href={process.env.NODE_ENV === 'development' ? '/' : '/index.html'}
        >
          <p>Go Back</p>
        </Link>
      </main>
    </div>
  );
}
