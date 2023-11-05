import React from "react";
import styles from '@/styles/Exhibit.module.css';

export default function Exhibit(props) {

    return (
        <>
        <div className={styles.exhibitContainer}>
            <div className={styles.exhibitImage} style={{backgroundImage: `url(${props.imageURL})`,}}>
            <h1>{props.header}</h1>
            </div>
            <div className={styles.textContainer}>
                <h4>{props.dates}</h4>
                <p>{props.information}</p>
            </div>
        </div>
        </>
    )
}