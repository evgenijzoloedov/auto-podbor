import React from 'react';
import styles from './Promo.module.scss'
import bcg from '../../../assets/images/mainBcg.jpg'
import pig from '../../../assets/images/main/pig.png'
import box from '../../../assets/images/main/box.png'
import search from '../../../assets/images/main/search.png'
import money from '../../../assets/images/main/money.png'
import people from '../../../assets/images/main/people.png'
import cloud from '../../../assets/images/clouds/cloud.png'
import cloud1 from '../../../assets/images/clouds/cloud1.png'
import cloud2 from '../../../assets/images/clouds/cloud2.png'
import cloud3 from '../../../assets/images/clouds/cloud3.png'
import cloud4 from '../../../assets/images/clouds/cloud4.png'
// import fullClouds from '../../../assets/images/clouds/fullclouds.png'
import fullClouds from '../../../assets/images/clouds/fullcloud.svg'
import button from '../../../assets/images/ui/button.png'
import cn from "classnames";
import { OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const Plus = ({src, title, text}) => {
    return (
        <div className={styles.plus}>
            <img src={src} alt={"plus"}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

const Pluses = () => {
    return (
        <div className={styles.pluses}>
            <Plus
                src={pig}
                title={"Экономия"}
                text={"Добиваемся от продавца максимальной скидки"}/>
            <Plus
                src={box}
                title={"0% с торга"}
                text={"В отличие от конкурентов не берем процент с торга"}/>
            <Plus
                src={search}
                title={"Полный осмотр"}
                text={"Наш специалист проверяет машину на месте"}/>
        </div>
    )
}


const MainTitle = () => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.mainTitleBlock}>
            <h1 className={styles.mainTitle}>
                <span className={styles.orange}>Бесплатный</span><span className={styles.bold}> подбор авто</span> с
                выездом специалиста в Петербурге и Ленобласти
            </h1>
            <p className={cn(styles.title, styles.mb32, styles.mw406)}>Даем гарантию юридической чистоты и технической
                исправности машины, помогаем с документами</p>
            <div className={styles.moneyBlock}>
                <img src={money} alt={"money"}/>
                <p>Наши услуги окупаются в 95% случаев</p>
            </div>
            <button className={styles.button} onClick={() => dispatch({type: OPEN_MODAL})}>
                <img src={button} alt={"Button"}/>
            </button>
        </div>
    )
}

const Cloud = () => {
    return (
        <div className={styles.cloud}>
            <img src={fullClouds} alt={"clouds"}/>
        </div>
    )
}


export const Promo = () => {
    return (
        <section className={styles.main}>
            <div style={{position:"relative"}}>
                <img src={bcg} alt={"main"} className={styles.bcgImage} height={650}/>
                <div className={styles.wrapper}>

                    <div className={styles.plusesDesktop}>
                        <Pluses/>
                    </div>
                    <MainTitle/>
                </div>
                <Cloud/>
                <img src={people} className={styles.people} alt={"people"}/>
            </div>
            <div className={styles.plusesMobile}>
                <Pluses/>
            </div>
        </section>
    );
};




