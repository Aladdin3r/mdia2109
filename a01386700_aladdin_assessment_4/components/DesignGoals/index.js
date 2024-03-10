import Image from "next/image"
import styles from './DesignGoals.module.css'

export default function DesignGoals() {
    return (
        <>
        <div className={styles.layout}>
            <p className={styles.label}>3 Good Design Goals</p>
            <ol className={styles.numberlist}>
                <li>Design</li>
                <li>Test</li>
                <li>Develop</li>
            </ol>
            <Image className={styles.photo} src='/images/photo1.jpg' height={130} width={130}/>
        </div>
        </>
    )
}