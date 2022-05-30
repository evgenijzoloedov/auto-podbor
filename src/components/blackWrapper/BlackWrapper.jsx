import React from 'react';
import smallBcgRectangle from "../../assets/images/RectangleBcg.png";
import styles from "./BlackWrapper.module.scss";

export const BlackWrapper = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <img src={smallBcgRectangle} alt={"Black background"} className={styles.img}/>
            {children}
        </div>
    );
};

