import React from 'react';
import styles from './inputs.module.scss'
export const NamedInput = ({htmlFor,label, ...props}) => {
    return (
        <div className={styles.content}>
            <label htmlFor={htmlFor} className={styles.label}>{label}:</label>
            <input id={htmlFor} {...props} className={styles.input}/>
        </div>
    );
};

