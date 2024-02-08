import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Form navigate="/Dashboard"/>
      </main>
    </>
  );
}
