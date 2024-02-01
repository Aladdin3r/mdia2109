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
      <main className={`${styles.main}`}>
       {
        item.inventory.books && item.inventory.books.map((i, index) => {
          return(
            <div key={index}>
              {i.yearPublished}
            </div>
          )
        })
       }

        {/** grab the title of the book ONLY above the year 2010 */}
       {
        item.inventory.books && item.inventory.books.map((i, index) => {
          if(i.yearPublished > 2010) {
              return(
              <div key={index}>
                {i.title} 
              </div>
              )
          }
        })
       }
      </main>
    </>
  );
}
