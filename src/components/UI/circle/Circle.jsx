import React from 'react';
import styles from "./Circle.module.scss";
import cn from "classnames";

export const Circle = ({count,className}) => {
    return (
        <div className={cn(styles.circle,className)}>
            <span className={styles.textInner}>0{count}</span>
        </div>
    )
}