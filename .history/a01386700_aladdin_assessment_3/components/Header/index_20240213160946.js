import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image src='./images/'/>
        </header>
    )
}