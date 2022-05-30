import React from 'react';
import bcg from '../../assets/images/404Page/404.png'
import styles from './NotFound.module.scss'
import {useNavigate} from "react-router";

export const NotFound = () => {
    const nav = useNavigate()


    return (
        <main className={styles.main}>
            <div className={styles.imageWrapper}>
                <img src={bcg} alt={"Not-Found"} className={styles.img}/>
            </div>
            <button className={styles.btn} onClick={() => nav('/')}>
                На главную
            </button>
        </main>

    );
};

