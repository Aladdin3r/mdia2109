// Product.js
import styles from './Product.module.css';
import { inventory } from '@/data/books';

export default function Product({ showAll, activeLink, sortedBooks }) {
    console.log("Active Link in Product: ", activeLink);

    const renderBooks = () => {
        // Use sortedBooks if available, otherwise use unsorted inventory.books
        const booksToRender = sortedBooks.length > 0 ? sortedBooks : inventory.books;

        // Filter books based on the activeLink if showAll is false
        const filteredBooks = showAll
            ? booksToRender
            : booksToRender.filter(book => {
                switch (activeLink) {
                    case 'communications':
                        return book.course.toLowerCase().includes('comm');
                    case 'computerScience':
                        return book.course.toLowerCase().startsWith('comp');
                    case 'marketing':
                        return book.course.toLowerCase().startsWith('mktg');
                    case 'math':
                        return book.course.toLowerCase().startsWith('math');
                    default:
                        return true; // Show all for 'all' tab
                }
            });

        return filteredBooks.map((b, index) => (
            <div key={index} className={styles.book}>
                <img src={b.image} alt={b.title} />
                <h3>{b.course}</h3>
                <p>{b.title}</p>
            </div>
        ));
    };

    return (
        <div className={styles.product}>
            <div className={styles.tab}>
                {/* Render tabs here */}
                {/* Example: */}
                {/* <div className={`${styles.item} ${activeLink === 'all' ? styles.active : ''}`} onClick={() => handleTabClick('all')}>
                    <p>All</p>
                </div> */}
            </div>
            {renderBooks()}
        </div>
    );
}
