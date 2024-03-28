import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Popup = ({ closePopup }) => {
    return (
        <div className={styles.popupOverlay} onClick={closePopup}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <ul className={styles.popupList}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/About'>About</Link></li>
                    <li><Link href='/Contact'>Contact Us</Link></li>
                </ul>  
            </div>
            <button className={styles.closeButton} onClick={closePopup}>X</button>
        </div>
    );
};

export default function Header({ activeLink }) {
    const [activeLinkState, setActiveLinkState] = useState(activeLink);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleSetActiveLink = (path) => {
        setActiveLinkState(path);
    };

    const handlePopupToggle = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <ul className={styles.list}>
                    <li><Image src='/images/bcit_logo.png' width={70} height={60} /></li>
                    <li>
                        <Link href='/' className={activeLinkState === '/' ? styles.activeLink : styles.links} onClick={() => handleSetActiveLink('/')}>Home</Link>
                    </li>
                    <li>
                        <Link href='/About' className={activeLinkState === '/About' ? styles.activeLink : styles.links} onClick={() => handleSetActiveLink('/About')}>About</Link>
                    </li>
                    <li>
                        <Link href='/Contact' className={activeLinkState === '/Contact' ? styles.activeLink : styles.links} onClick={() => handleSetActiveLink('/Contact')}>Contact Us</Link>
                    </li>
                    <li>
                        <Image src='/two.png' alt='image of bar' width={60} height={80} className={styles.bar} onClick={handlePopupToggle} />
                        {isPopupOpen && <Popup closePopup={handlePopupToggle} />}
                    </li>
                </ul>
            </header>
        </>
    );
}
