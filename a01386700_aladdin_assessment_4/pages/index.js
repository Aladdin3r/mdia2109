import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState('/');

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <HeadArea title='Home' description='BCIT offers over 300 programs and 1000 part-time courses in 6 general areas of study. Search or browse our catalogues to find the right fit for the next step in your career.'/>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <main className={`${styles.main}`}>
        <div className={styles.topdiv}>
          <h1 className={styles.heading1}>Welcome to BCIT</h1>
          <p className={styles.firstp}>Different than a college or university,<br/> the British Columbia Institute of Technology<br/> offers practice experience.</p>
          <button className={styles.button}><Link href='/About' className={styles.buttonlink} onClick={() => handleSetActiveLink('/About')}>About</Link></button>
          <Image src='/images/BCIT-Burnaby-Campus.jpg' height={410} width={1000} className={styles.campusimage}/>
        </div>
        
        <div>
          <h2 className={styles.heading2}>Ready to Apply?</h2>
          <Image className={styles.photo2} src='/images/photo2.jpg' height={150} width={130}/>
          <p className={styles.secondp}>Your tuition depends on <br/>the type of program you enter.</p>
          <Image className={styles.photo1} src='/images/photo1.jpg' height={50} width={50}/>
        </div>
      </main>
      <Footer/>
    </>
  );
}
