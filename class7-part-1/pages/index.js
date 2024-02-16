import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BCIT information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Welcome to BCIT!</h1>
        <Link href="/About">About</Link>
      </header>
      <main className={`${styles.main}`}>
        <div id="tester">testing 1</div>
        <div class="classStyle">testing 2</div>
       <button>Register</button>
       <ul>
        <li>item</li>
       </ul>
       
      </main>
    </>
  );
}
