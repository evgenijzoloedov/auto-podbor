import React from 'react';
import styles from './StagesOfSelectionCard.module.scss'


export const StagesOfSelectionCard = ({src, title, children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={src} alt={"Selection Card"} height={180}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.text}>
                    {children}
                </p>
            </div>
        </div>
    );
};

