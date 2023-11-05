import React from "react";
import styles from '@/styles/Nav.module.css';

export default function Nav() {
    return (
        <>
        <nav className={styles.navContainer}>
            <div className={styles.wordmark}>City Aquarium</div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Visit</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <div className={styles.selectBar}></div>
        </>
    )
}