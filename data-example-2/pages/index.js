import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { inventory } from "@/data/inventory";
import { useState } from "react";

export default function Home() {
  const [item, setItem] = useState({inventory});
  console.log(inventory);
  return (
    <>
      <Head>

      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       
      </main>
    </>
  );
}
