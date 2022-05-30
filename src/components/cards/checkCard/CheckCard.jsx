import React from 'react';
import styles from './CheckCard.module.scss'
import cn from "classnames";


export const CheckCard = ({src,title,text,isReversed=false}) => {
    return (
        <div className={cn(styles.card,{
            [styles.reversed]:isReversed
        })}>
            <div className={styles.content}>
                <h3 className={cn(styles.title,isReversed?styles.textLeft:styles.textRight)}>{title}</h3>
                <p className={cn(styles.text,isReversed?styles.textLeft:styles.textRight)}>{text}</p>
            </div>
            <img src={src} className={styles.img}/>
        </div>
    );
};

