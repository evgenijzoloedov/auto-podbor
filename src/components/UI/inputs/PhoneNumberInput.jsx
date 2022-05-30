import React from 'react';
import styles from './inputs.module.scss'
import InputMask from "react-input-mask";
export const PhoneNumberInput = ({htmlFor,label, ...props}) => {
    return (
        <div className={styles.content}>
            <label htmlFor={htmlFor} className={styles.label}>{label}</label>
            <InputMask
                id={htmlFor} {...props} className={styles.input}
                mask="+7 (999) 999 99 99" maskChar="_"
                alwaysShowMask={true}
            />
        </div>
    );
};

