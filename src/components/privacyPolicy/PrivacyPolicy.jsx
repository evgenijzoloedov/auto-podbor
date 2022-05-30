import React from 'react';
import styles from './PrivacyPolicy.module.scss'
import {Button} from "../UI/button";
import {useNavigate} from "react-router";

export const PrivacyPolicy = () => {
    const nav = useNavigate()


    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                Политика конфиденциальности
            </h1>
            <div className={styles.content}>
                <div className={styles.subtitle}>
                    Правило 1.1
                </div>
                <div className={styles.text}>
                    Мониторим рынок 24/7 с использованием специальных программ, взаимодействуем со всеми официальными
                    автосалонами, благодаря чему получаем первыми информацию о новых поступлениях авто.
                </div>
                <div className={styles.text}>
                    С 2017 года, мы помогаем нашим клиентам покупать качественные автомобили, при этом экономить время и
                    деньги!
                </div>
                <div className={styles.text}>
                    Да, все верно, мы занимаемся подбором автомобилей
                </div>
                <div className={styles.subtitle}>
                    Правило 1.2
                </div>
                <div className={styles.text}>
                    Мониторим рынок 24/7 с использованием специальных программ, взаимодействуем со всеми официальными
                    автосалонами, благодаря чему получаем первыми информацию о новых поступлениях авто.
                </div>
                <div className={styles.text}>
                    С 2017 года, мы помогаем нашим клиентам покупать качественные автомобили, при этом экономить время и
                    деньги!

                </div>
                <div className={styles.text}>
                    Да, все верно, мы занимаемся подбором автомобилей
                </div>

                <div className={styles.subtitle}>
                    Правило 1.3
                </div>
                <div className={styles.text}>
                    Мониторим рынок 24/7 с использованием специальных программ, взаимодействуем со всеми официальными
                    автосалонами, благодаря чему получаем первыми информацию о новых поступлениях авто.
                </div>
                <div className={styles.text}>
                    С 2017 года, мы помогаем нашим клиентам покупать качественные автомобили, при этом экономить время и
                    деньги!

                </div>
                <div className={styles.text}>
                    Да, все верно, мы занимаемся подбором автомобилей
                </div>

                <div className={styles.subtitle}>
                    Правило 1.4
                </div>
                <div className={styles.text}>
                    Мониторим рынок 24/7 с использованием специальных программ, взаимодействуем со всеми официальными
                    автосалонами, благодаря чему получаем первыми информацию о новых поступлениях авто.
                </div>
                <div className={styles.text}>
                    С 2017 года, мы помогаем нашим клиентам покупать качественные автомобили, при этом экономить время и
                    деньги!

                </div>
                <div className={styles.text}>
                    Да, все верно, мы занимаемся подбором автомобилей
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <Button className={styles.btn} text={"Вернуться на главную страницу"} onClick={()=>nav('/')} />
            </div>
        </section>
    );
};


