import styles from './Product.module.css';
import { inventory } from '@/data/books';

export default function Product({ showAll, activeLink}) {
  return (
    <>
      <div className={styles.product}>
        {showAll && inventory && inventory.books.map((b, index) => {
          if (activeLink === 'all' || 
              (activeLink === 'communications' && b.course.toLowerCase().includes('comm')) || 
              (activeLink === 'computerScience' && b.course.toLowerCase().startsWith('comp')) || 
              (activeLink === 'marketing' && b.course.toLowerCase().startsWith('mktg')) || 
              (activeLink === 'math' && b.course.toLowerCase().startsWith('math'))) {
            return (
              <div key={index} className={styles.book}>
                <img src={b.image} alt={b.title} />
                <h3>{b.course}</h3>
                <p>{b.title}</p>
              </div>
            );
          } else {
            return null; 
          }
        })}
      </div>
    </>
  );
}
