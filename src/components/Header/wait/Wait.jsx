import React from 'react';
import styles from './Wait.module.scss'


export const Wait = () => {
    return (
        <div className={styles.content}>
            <span className={styles.indicator}/>
            <span className={styles.text}>

                Ждем тебя у нас<br/>
с 9:00 до 22:00
            </span>
        </div>
    );
};

