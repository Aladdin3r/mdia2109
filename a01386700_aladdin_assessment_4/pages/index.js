import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="BCIT offers over 300 programs and 1000 part-time courses in 6 general areas of study. Search or browse our catalogues to find the right fit for the next step in your career." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        
      </main>
    </>
  );
}
