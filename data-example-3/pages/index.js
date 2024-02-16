import Head from "next/head";
import styles from "@/styles/Home.module.css";
import books from "@/data/inventory.json"
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState(books);
  console.log(books);
  return (
    <>
      <main className={`${styles.main}`}>
        {
          data && data.map((i, index) => {
            return(
              <div key={index}>
                {i.yearPublished}
              </div>
            )
          })
        }
      </main>
    </>
  );
}
