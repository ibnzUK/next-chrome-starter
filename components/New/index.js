import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
          <p className={styles.description}>
            This is an example of a Browser Extension built with NEXT.JS.
            Please refer to the GitHub repo for running instructions and
            documentation
          </p>
          <h1 className={styles.code}>New Page ./components/New/index.js</h1>
          <p>{"[ - This is New page content - ]"}</p>
          <p onClick={() => navigateToPage('index')}>{"< Go Back"}</p>
        </main>
      </div>
    );
  }