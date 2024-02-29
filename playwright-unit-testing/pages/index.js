import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
    <header>
      <h1>Home Page</h1>
    </header>
      <main className={`${styles.main}`}>
        <label>User Name <input type="text"/></label>
        <label>Password <input type="password"/></label>
      </main>
      <footer>

      </footer>
    </>
  );
}
