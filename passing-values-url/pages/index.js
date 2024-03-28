import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <main className={`${styles.main}`}>
       <Link 
        href={{
          pathname: ' ./About',
          query: { name: 'Rawan'}
        }}
       >
        About
       </Link>
      </main>
    </>
  );
}
