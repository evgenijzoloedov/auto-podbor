import React from 'react';
import styles from './Cube.module.scss'
export const Cube = ({src}) => {
    return (
        <div className={styles.cube}>
            <img src={src} className={styles.img} alt={"choice"}/>
        </div>
    );
};

