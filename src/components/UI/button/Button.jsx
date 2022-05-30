import React from 'react';
import styles from './Button.module.scss'
import cn from "classnames";
export const Button = ({text,className, ...props}) => {
    return (
        <button className={cn(styles.btn,className)} {...props}>
            {text}
        </button>
    );
};

