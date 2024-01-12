import Header from "@/components/Header"
import styles from "@/styles/About.module.css"
import Footer from "@/components/Footer"
import Counter from "@/components/Counter"

export default function About() {
    return(
        <>
            <Header/>
            <main className={styles.main}>
                <h1>About Page</h1>
                <Counter/>
            </main>
            <Footer/>
        </>
    )
}