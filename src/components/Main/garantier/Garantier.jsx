import React from 'react';
import styles from './Garantier.module.scss'
import cn from "classnames";
import letter from '../../../assets/images/garant/letter.png'

export const Garantier = () => {

    return (
            <section className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.card}>
                    <span className={cn(styles.isPay, styles.white)}>
                        Бесплатно
                    </span>
                        <div className={styles.textContent}>
                            <h3 className={styles.title}>
                                Вернем <span className={styles.yellow}>20 000</span> ₽ в течение <span
                                className={styles.bold}>14 дней</span>
                            </h3>

                            <div className={styles.list}>
                                <div className={styles.circle}/>
                                <div className={styles.bigText}>Вернем деньги за наши услуги или <span
                                    className={styles.bold}>бесплатно</span> отремонтируем авто
                                </div>
                            </div>
                            <p className={styles.smallText}>
                                Бесплатно отремонтируем авто в случае, если при проверке мы не смогли выявить
                                неисправность
                                автомобиля. Сумма компенсации, или ремонта не может превышать стоимость заказанных услуг
                                по
                                подбору авто.
                            </p>
                        </div>
                        <img src={letter} alt={"letter"} className={styles.letter}/>
                    </div>

                    <div className={styles.card}>
                    <span className={cn(styles.isPay, styles.yellow)}>
                        Расширенная
                    </span>
                        <div className={styles.textContent}>
                            <h3 className={styles.title}>
                                Отремонтируем на
                                <span className={styles.yellow}> 100 000 </span>
                                за <span
                                className={styles.bold}>60 дней</span>
                            </h3>

                            <div className={styles.list}>
                                <div className={styles.circle}/>
                                <div className={styles.bigText}>Бесплатно отремонтируем автомобиль на сумму не
                                    более <span
                                        className={styles.bold}>100 000 ₽</span>
                                </div>
                            </div>
                            <p className={styles.smallText}>
                                Если в течение 60 дней после покупки машины выявились неисправности в узлах и агрегатах,
                                за
                                работоспособность которых мы поручились при подборе.
                            </p>
                        </div>
                        <img src={letter} alt={"letter"} className={styles.letter}/>
                    </div>
                </div>
            </section>
    );
};

