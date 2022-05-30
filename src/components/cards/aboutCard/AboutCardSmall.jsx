import React from 'react';
import styles from './AboutCard.module.scss'
import {Circle} from "../../UI/circle/Circle";

export const AboutCardSmall = ({text, number}) => {
    return (
        <div className={styles.small}>
            <p className={styles.text}>
                {text}
            </p>

                <Circle count={number} className={styles.circle}/>

        </div>
    );
};

