import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main className={`${styles.main}`}>
        <p>Studying!</p>
        <Link href="/About">About Page</Link>
      </main>
      <footer>

      </footer>
    </>
  );
}
