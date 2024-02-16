import styles from './Product.module.css'

export default function Product() {
    return(
      <>
        <div className={styles.product}>
            <div className={styles.item}><a href='#'>All</a></div>
            <div className={styles.item}><a href='#'>Communications</a></div>
            <div className={styles.item}><a href='#'>Computer Science</a></div>
            <div className={styles.item}><a href='#'>Marketing</a></div>
            <div className={styles.item}><a href='#'>Math</a></div>
        </div>
      </>  
    )
}