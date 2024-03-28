import HeadArea from "@/components/HeadArea"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "@/styles/Contact.module.css"
import Form from "@/components/Form"

export default function Contact() {
    return(
        <>
            <HeadArea title="Contact Us" description="Please contact us if you have any questions."/>
            <Header/>
            <main>
                <h1 className={styles.heading}>Contact Us</h1>
                <div className={styles.formalign}>
                    <Form/>
                </div>
            </main>
            <Footer/>
        </>
    )
}