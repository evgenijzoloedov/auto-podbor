import React from 'react';
import styles from './Choice.module.scss'
import {WhyCard} from "../../cards/whyCard";
import cars from '../../../assets/images/choice/Cars.png'
import bank from '../../../assets/images/choice/bank.png'
import wallet from '../../../assets/images/choice/wallet.png'
import raiting from '../../../assets/images/choice/raiting.png'
import packageImg from '../../../assets/images/choice/package.png'
import clock from '../../../assets/images/choice/clock.png'

export const Choice = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.pink}/>
            <div className={styles.blue}/>
            <h2 className={styles.title}>Почему выбирают нас</h2>
            <div className={styles.content}>
                <WhyCard
                    src={cars}
                    title={"Более 2000 подобранных авто"}
                    text={"Имеем огромный опыт по поиску автомобилей и выявлению в них неполадок. Клиенты оставили более 1300 отзывов в ВКонтакте и Яндексе."}/>
                <WhyCard
                    src={wallet}
                    title={"Не берем процент с торга"}
                    text={"Большинство конкурентов зарабатывают на проценте с торга и вместо нужной клиенту машины выбирают ту, с которой можно получить скидку крупнее."}/>

                <WhyCard
                    src={bank}
                    title={"Гарантия на услуги"}
                    text={"Обязуемся вернуть деньги в случае, если после нашего подбора в автомобиле выявились скрытые дефекты. Готовы отремонтировать машину за свой счет."}/>

                <WhyCard
                    src={clock}
                    title={"Экономия времени"}
                    text={"Самостоятельно выезжаем на осмотр и проверку автомобиля. Торгуемся с продавцом и помогаем с оформлением документов при покупке."}/>

                <WhyCard
                    src={packageImg}
                    title={"Проверка по закрытым базам"}
                    text={"Пробиваем автомобиль по базам ГИБДД и по собственным каналам. Выявляем юридические нарушения и несоответствия в документах."}/>
                <WhyCard
                    src={raiting}
                    title={"Работаем с 2017 года"}
                    text={"За все годы работы осмотрели более 5000 автомобилей. Отработанная методика подбора позволяет находить клиенту автомобиль за минимальный срок."}/>
            </div>
        </section>
    );
};

