import HeadArea from "@/components/HeadArea"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import styles from '@/styles/About.module.css'
import DesignGoals from "@/components/DesignGoals"

export default function About() {
    return(
        <>
            <HeadArea title="About" description="Find out more about BCIT"/>
            <Header/>
            <main>
                <div className={styles.topdiv}>
                    <h1 className={styles.heading}>About</h1>
                    <Image src='/images/BCIT-Burnaby-Campus.jpg' height={410} width={900} className={styles.campusimageabout}/>
                    <p className={styles.aboutp}>
                    We offer practical career credentials designed for the workplace, from diplomas and certificates to bachelor's and master's degrees
                    </p>
                </div>
                <DesignGoals/>
            </main>
            <Footer/>
        </>
    )
}