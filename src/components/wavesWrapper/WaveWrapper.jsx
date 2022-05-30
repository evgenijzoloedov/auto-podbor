import React from 'react';
import styles from './WaveWrapper.module.scss'
export const WaveWrapper = ({children, ...props}) => {
    return (
        <div className={styles.wrapper}>
            <img {...props} className={styles.img}/>
            {children}
        </div>
    );
};

