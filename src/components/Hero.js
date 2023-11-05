import React from "react";
import styles from '@/styles/Hero.module.css';

export default function Hero(props) {

    return (
        <>
        <div className={styles.hero} style={{backgroundImage: `url(${props.heroImage})`, height: props.height }}>
        </div>
        </>
    )
}