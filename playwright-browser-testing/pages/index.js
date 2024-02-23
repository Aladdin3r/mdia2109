import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main className={`${styles.main}`}>
        <div className={styles.container} id="coloring"></div>
        <p>Studying!</p>
      </main>
      <footer>

      </footer>
    </>
  );
}
