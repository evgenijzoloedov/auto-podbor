import React from 'react';
import styles from './RoadToCenter.module.scss'


export const RoadToCenter = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Схема прохода к нам
            </h2>
            <p className={styles.text}>
                Работаем в офисе: г. Санкт-Петербург, ул. Оптиков, 1к3<br/>
                Станция метро Старая деревня
            </p>
        </div>
    );
};

