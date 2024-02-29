// Button.js
import styles from './Button.module.css';
import React from 'react';
import { inventory } from '@/data/books';

export default function Button({ isVisible, setSortedBooks, setShowAll, activeLink }) {
    const handleSortByTitle = () => {
        const sortedBooks = [...inventory.books].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });

        setSortedBooks(sortedBooks);
        setShowAll(false);
    };

    const handleSortAscending = () => {
        const sortedBooks = [...inventory.books].sort((a, b) => a.edition - b.edition);
        
        setSortedBooks(sortedBooks);
        setShowAll(false);
    };

    const handleSortDescending = () => {
        const sortedBooks = [...inventory.books].sort((a, b) => b.edition - a.edition);
        
        setSortedBooks(sortedBooks);
        setShowAll(false);
    };

    return (
        <>
            {isVisible && (
                <div className={styles.buttons}>
                    <div className={styles.button}><button className={styles.bare} onClick={handleSortByTitle}>Book Title</button></div>
                    <div className={styles.button}><button className={styles.bare} onClick={handleSortAscending}>&#x2191;</button></div>
                    <div className={styles.button}><button className={styles.bare} onClick={handleSortDescending}>&#x2193;</button></div>
                </div>
            )}
        </>
    );
}
