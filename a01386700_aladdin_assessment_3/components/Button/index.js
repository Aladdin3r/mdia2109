import styles from './Button.module.css'
import React from 'react'

export default function Button({isVisible}) {

    return(
        <>
            {isVisible && (
                <div className={styles.buttons}>
                    <div className={styles.button}><button className={styles.bare}>Book Title</button></div>
                    {/* up arrow */}
                    <div className={styles.button}><button className={styles.bare}>&#x2191;</button></div>
                    {/* down arrow */}
                    <div className={styles.button}><button className={styles.bare}>&#x2193;</button></div>
                </div>
            )}
        </>
    )
}