import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";


export default function Home() {
  const [item, setItem] = useState([...inventory])
  console.log(inventory);
  return (
    <>
      <main className={`${styles.main}`}>
       {
        item && item.map((i, index) => {
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
