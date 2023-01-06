import React from "react";
import styles from "./BackArrow.module.css";

export function BackArrow() {
    return (
        <div className={styles.backWrapper}>
            <a className={styles.back} href="/profile">Назад</a>
        </div>
    );
}