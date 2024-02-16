import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image src='/images/bcit_logo.png' width={100} height={100}/>
            <ul className={styles.headerlist}>
                <li>Home</li>
                <li>Hours</li>
                <li>Merchandise</li>
            </ul>
            <Image src='/images/shopping.png' width={100} height={100}/>
        </header>
    )
}