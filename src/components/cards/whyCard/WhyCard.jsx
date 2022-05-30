import React from 'react';
import {Cube} from "../../UI/cube";
import shadow from '../../../assets/images/shadow.svg'
import styles from './WhyCard.module.scss'


export const WhyCard = ({src,title,text}) => {
    return (
        <div className={styles.card}>
            <Cube src={src}/>
            <img src={shadow} alt={"shadow"} className={styles.shadow}/>
            <h4 className={styles.title}>{title}</h4>
            <h5 className={styles.text}>{text}</h5>
        </div>
    );
};

