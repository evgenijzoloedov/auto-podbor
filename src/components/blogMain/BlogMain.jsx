import React from 'react';
import styles from './BlogMain.module.scss'
import person from '../../assets/images/BlogPage/BlockMain.png'
import {Button} from "../UI/button";
import {OPEN_MODAL, useModalContext} from "../../contexts/ModalContext";
import wheels from "../../assets/images/BlogPage/wheels.png";


export const BlogMain = () => {

    const {dispatch} = useModalContext()

    return (
        <section className={styles.wrapper}>
            <img src={person} alt={"Person"} className={styles.img}/>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Блог
                </h1>
                <p className={styles.text}>
                    Рассказываем на что обращать внимание при выборе автомобиля и как не попасть на уловки продавцов. Если у вас возникли трудности или сомнения при покупке машины, мы готовы проконсультировать вас бесплатно по телефону
                    <b className={styles.phoneNumber}>&nbsp;+7 (999) 200 93 30</b>.
                </p>
                <Button text={"Получить консультацию"} className={styles.btn} onClick={()=>dispatch({type:OPEN_MODAL})}/>
            </div>
            <img src={wheels} alt={"wheels"} className={styles.wheels}/>
        </section>
    );
};

