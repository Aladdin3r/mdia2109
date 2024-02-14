import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image src='/images/bcit_logo.png' width={100} height={100}/>
            <ul>
                <li>Home</li>
                <
            </ul>
        </header>
    )
}