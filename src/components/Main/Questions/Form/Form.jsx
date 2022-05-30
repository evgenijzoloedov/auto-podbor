import React, {useState} from 'react';
import styles from './Form.module.scss'
import {CustomForm} from "../../../UI/Forms/CustomForm";









export const FirstStep = ({onUploadPosts}) => {

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.title}>Остались вопросы?</h2>
            <h5 className={styles.subtitle}>Позвоните нам</h5>
            <span className={styles.phone}>+7 (999) 200-93-30 </span>
            <h5 className={styles.subtitle}>или заполните заявку на бесплатную консультацию</h5>
            <CustomForm isRow={false} upload={(values)=>onUploadPosts(values)}/>
        </div>
    );
};

