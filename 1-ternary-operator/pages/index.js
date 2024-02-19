import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div style={
                      number == 1 ? { backgroundColor: 'red'} :
                      number == 2 ? { backgroundColor: 'blue'} :
                      {backgroundColor: 'transparent'}
        }>
          {number}
        </div>
        <button onClick={() => setNumber(number + 1)}>increment</button>
        <button onClick={() => setNumber(number - 1)}>decrement</button>
      </main>
    </>
  );
}