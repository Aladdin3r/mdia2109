import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import { inventory } from "@/data/books";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState()

  return (
    <>
      <Head>
        <title>BCIT Book Store</title>
        <meta name="description" 
        content=
        "All online pick-up orders are available at the Burnaby Campus Bookstore (SE2). Please allow 2-3 business days for order processing."
       />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        {
          data 
        }
      </main>
      <Footer/>
    </>
  );
}
