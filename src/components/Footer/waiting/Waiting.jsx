import React from 'react';
import styles from './Waiting.module.scss'
import {Social} from "../../Header/social";
export const Waiting = () => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                Ждем тебя у нас<br/>
                с 9:00 до 22:00
            </div>
            <Social/>
        </div>
    );
};

