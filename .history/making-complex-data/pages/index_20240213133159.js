import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { bookstore } from "@/data/books";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState();
  
  const addingData = () => {
    console.log("Here");
    setData(bookstore);
    console.log(bookstore);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <button onClick={() => addingData()}>Click Me</button>

        {
          data && data.books.map((b, index) => {
            if(b.category.toLowerCase() == "java") {
              return(
                <div key={index}>
                  <h1>{b.title}</h1>
                  {
                    b.authors && b.authors.map((a, ind) => {
                      return(
                        <div key={ind}>
                          {a}
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          })
        }
      </main>
    </>
  );
}