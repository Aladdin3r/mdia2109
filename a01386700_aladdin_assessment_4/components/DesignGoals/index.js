import Image from "next/image";
import styles from './DesignGoals.module.css';
import { useState, useEffect } from "react";

export default function DesignGoals() {
    const goals = ['Design', 'Test', 'Develop'];
    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGoalIndex(prevIndex => (prevIndex + 1) % goals.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [goals]);

    return (
        <div className={styles.layout}>
            <p className={styles.label}>3 Good Design Goals</p>
            <ol className={styles.numberlist}>
                {goals.map((goal, index) => (
                    <li
                        key={index}
                        className={`${styles.listItem} ${index === currentGoalIndex ? styles.active : ''}`}
                    >
                        <span className={index === currentGoalIndex ? styles.activeNumber : ''}>
                        {index === 0 ? `${index + 1}.` : index === 1 ? '2.' : index === 2 ? '3.' : `${index}.`}
                        </span>{" "}
                        {goal}
                    </li>
                ))}
            </ol>
            <Image className={styles.photo} src='/images/photo1.jpg' height={130} width={130} />
        </div>
    );
}
