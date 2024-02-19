import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Product from "@/components/Product";
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const makeSetActiveLink = (link) => {
    setActiveLink(link);
  }

  const showAllBooks = () => {
    setShowAll(true);
    makeSetActiveLink('all');
    makeButtonVisible();
  }
  
  const makeButtonVisible = () => {
    setShowButton(true);
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
      <div className={styles.tab}>
          <div className={`${styles.item} ${activeLink === 'all' ? styles.active : ''}`} onClick={showAllBooks}>
            <p>All</p>
          </div>
          <div className={`${styles.item} ${activeLink === 'communications' ? styles.active: ''}`} onClick={() => makeSetActiveLink('communications')}>
            <p>Communications</p>
          </div>
          <div className={`${styles.item} ${activeLink === 'computerScience' ? styles.active: ''}`} onClick={() => makeSetActiveLink('computerScience')}>
            <p>Computer Science</p>
          </div>
          <div className={`${styles.item} ${activeLink === 'marketing' ? styles.active: ''}`} onClick={() => makeSetActiveLink('marketing')}>
            <p>Marketing</p>
          </div> 
          <div className={`${styles.item} ${activeLink === 'math' ? styles.active: ''}`} onClick={() => makeSetActiveLink('math')}>
            <p>Math</p>
          </div>
      </div>
      {showButton && <Button isVisible={showButton}/>}
      <main className={`${styles.main}`}>
        <Product 
          showAll={showAll} 
          activeLink={activeLink} 
          makeSetActiveLink={makeSetActiveLink}
        />
      </main>
      <Footer/>
    </>
  );
}
