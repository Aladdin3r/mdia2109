import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inventory } from "@/data/books";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState();

  const addingData = () => {
    console.log("here");
    setData(inventory);
    console.log(inventory);
  }

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
      <Header />
      <main className={`${styles.main}`}>
        <button onClick={() => addingData()}>Click Me</button>
        {
          data && data.books.map((b, index) => {
            if(b.edition === 10) {
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
                    <img src={b.image} alt={b.title} />
                </div>
              )
            }
          })  
          
        }
      </main>
      <Footer/>
    </>
  );
}
