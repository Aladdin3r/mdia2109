import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const shouldShowSubmitButton = () => {
        return firstName.match(nameRegex) && firstName.length > 1 &&
            lastName.match(nameRegex) && lastName.length > 1 &&
            email.match(emailRegex) && isChecked;
    };

    return (
        <>
            {!formSubmitted && (
                <>
                    <p className={styles.formlabel}>Have any questions?</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>First Name:</label>
                        <input type="text" name="fname" value={firstName} onChange={handleFirstNameChange} className={styles.input}/>
                        <label>Last Name:</label>
                        <input type="text" name="lname" value={lastName} onChange={handleLastNameChange} className={styles.input}/>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={handleEmailChange} className={styles.input}/>
                        <div className={styles.checkboxcontainer}>
                            <label className={styles.checkboxlabel}>Do you agree to the terms?:</label>
                            <input type="checkbox" name="check" checked={isChecked} onChange={handleCheckboxChange} className={styles.input}/>
                        </div>
                        {shouldShowSubmitButton() && (
                            <input type="submit" value="Submit" className={styles.submit}/>
                        )}
                    </form>
                </>
            )}
            {formSubmitted && (
                <p>Thank you, your form has been submitted</p>
            )}
        </>
    );
}
