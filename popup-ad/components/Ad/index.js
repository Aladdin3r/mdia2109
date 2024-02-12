import { useState } from "react";
import styles from './Ad.module.css'

export default function Ad() {
    const [popup, setPopup] = useState(true);

    return(
        <>
            {
                popup ?
                <div className={styles.container}>
                    <div className={styles.popupArea}>
                        <div onClick={() => setPopup(false)}>Close</div>
                        Welcome
                    </div>
                </div>
                : <></>
            }
        </>
    )
}