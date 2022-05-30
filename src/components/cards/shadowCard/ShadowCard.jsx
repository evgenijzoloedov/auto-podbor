import React from 'react';
import styles from './Shadow.module.scss'
import cn from "classnames";
export const ShadowCard = ({children,className}) => {
    return (
        <div className={cn(styles.shadow,className)}>
            {children}
        </div>
    );
};

