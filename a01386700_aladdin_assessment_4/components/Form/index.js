import styles from './Form.module.css'

export default function Form() {
    return (
        <>
            <p className={styles.formlabel}>Have any questions?</p>
            <form className={styles.form}>
                <label>First Name:</label>
                <input type="text" name="fname" className={styles.input}/>
                <label>Last Name:</label>
                <input type="text" name="lname" className={styles.input}/>
                <label>Email:</label>
                <input type="email" name="email" className={styles.input}/>
                <div className={styles.checkboxcontainer}>
                    <label className={styles.checkboxlabel}>Do you agree to the terms?:</label>
                    <input type="checkbox" name="check" className={styles.input}/>
                </div>
                <input type="submit" value="Submit" className={styles.submit}/>
            </form>
        </>
    )
}