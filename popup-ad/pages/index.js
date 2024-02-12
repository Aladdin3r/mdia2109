import styles from "@/styles/Home.module.css";
import Ad from "@/components/Ad";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        Welcome to the page
        <Ad/>
      </main>
    </>
  );
}
