import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  return (
    <>
      <HeadArea/>
      <main className={`${styles.main}`}>
        <div>
          <h1>Welcome to BCIT</h1>
        </div>
        <div>
          <h2>Ready to Apply?</h2>
        </div>
      </main>
      <Footer/>
    </>
  );
}
