import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>Visit</li>
                <li>Apply Now</li>
                <li><Image src='/images/bcit_logo.png' width={70} height={60}/></li>
                <li>Events</li>
                <li>Careers</li>
            </ul>
        </footer>
        </>
    )
}