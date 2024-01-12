import styles from './Button.module.css'

export default function Button({
    title="default",
    color="var(--purple)"
}) {
    return(
        <button className={styles.button} style={{backgroundColor: color}}>{title}</button>
    )
}