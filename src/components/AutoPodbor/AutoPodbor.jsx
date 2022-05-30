import React from 'react';
import styles from './AutoPodbor.module.scss'
import {Button} from "../UI/button";
import car from '../../assets/images/servicePage/car.png'
import bcg from '../../assets/images/servicePage/bcg.png'
import {OPEN_MODAL, useModalContext} from "../../contexts/ModalContext";
import wheels from '../../assets/images/BlogPage/wheels.png'


const ListServices = ({}) => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>Согласование параметров авто и бюджета с заказчиком</li>
            <li className={styles.item}>Оформление Договора на подбор автомобиля</li>
            <li className={styles.item}>Анализ рынка предложений</li>
            <li className={styles.item}>Первичный отбор авто подходящих под параметры заказчика, отправка их на
                согласование заказчик
            </li>
            <li className={styles.item}>Выезд и полная диагностика автомобиля (проверка состояния кузова и салона,
                корректности указанного пробега, юридической чистоты, тест-драйв и т.д.)
            </li>
            <li className={styles.item}>Предоставление фото-отчета и согласование автомобиля с заказчиком</li>
            <li className={styles.item}>Совместный выезд с заказчиком на встречу с продавцом</li>
            <li className={styles.item}>Аргументированный торг, 100% в интересах заказчика</li>
            <li className={styles.item}>По необходимости, загоняем на подъемник, замеряем компрессию</li>
            <li className={styles.item}>Помощь в оформлении всех документов и постановки на учет в МРЭО.</li>
        </ul>
    )
}

const HeaderBlock = ({price}) => {
    return (
        <div className={styles.headerBlock}>
            <h1 className={styles.title}>Автоподбор</h1>
            <h3 className={styles.subtitle}>Стоимость: {price} ₽</h3>
            <p className={styles.text}>Цена услуги фиксированная и не меняется в процессе работы. Общая стоимость работ
                может измениться
                только в случае заказа дополнительных услуг.</p>
        </div>
    )
}


const EnterInService = ({serviceText}) => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>Входит в услугу</h3>
            {/*<ListServices/>*/}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div dangerouslySetInnerHTML={{__html: serviceText}}/>
            </div>
            <div/>
            <div className={styles.btnWrapper}>
                <Button text={"Заказать услугу"} className={styles.btn} onClick={() => dispatch({type: OPEN_MODAL})}/>
            </div>
            <img className={styles.img} src={car} alt={"car"}/>

        </div>
    )
}

// style={{display:"flex",justifyContent:"center",alignItems:"center"}}
export const AutoPodbor = ({service}) => {
    return (
        <section className={styles.wrapper}>
            <div >
                <HeaderBlock price={service.price_from}/>
                <EnterInService serviceText={service.service_include}/>
            </div>
            <img className={styles.imgBackground} src={bcg} alt={"Background"}/>
        </section>
    );
};



