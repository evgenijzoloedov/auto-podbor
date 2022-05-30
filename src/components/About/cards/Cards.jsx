import React from 'react';
import styles from './Cards.module.scss'
import bcg from '../../../assets/images/waves/blackBlogRec.png'
import {AboutCardBig, AboutCardSmall} from "../../cards/aboutCard";
import garantier from '../../../assets/images/aboutPage/garantier.png'
import checkingDocuments from '../../../assets/images/aboutPage/checkingDocuments.jpg'
import offerUnderKEy from '../../../assets/images/aboutPage/offerUnderKEy.jpg'
import specialEquipment from '../../../assets/images/aboutPage/specialEquipment.jpg'
import moreCoin from '../../../assets/images/aboutPage/moreCoin.jpg'
import closeBase from '../../../assets/images/aboutPage/closeBatabase.png'
import cn from "classnames";
import {Button} from "../../UI/button";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

import {WaveWrapper} from "../../wavesWrapper";

const SmallCardsBlock = () => {
    return (
        <>
            <AboutCardSmall
                number={1}
                text={"Необходимо свободное время и возможность оперативно передвигаться для осмотра машин"}
            />
            <AboutCardSmall
                number={2}
                text={"Надо обладать достаточным опытом и оборудованием для диагностики автомобиля"}
            />
            <AboutCardSmall
                number={3}
                text={"Нужно знать все юридические нюансы для проверки документов на машину и проведения сделки"}
            />
            <AboutCardSmall
                number={4}
                text={"Большая часть надежных машин продается через закрытые базы до выхода на рынок, а остатки уже поступают на массовый рынок"}
            />
            <AboutCardSmall
                number={5}
                text={"При поиске автомобиля необходимо иметь холодную голову, поскольку эмоции в этом деле плохой помощник"}
            />
            <AboutCardSmall
                number={6}
                text={"Нужно ориентироваться на авторынке, чтобы провести торг и сделку на наиболее выгодных условиях"}
            />
        </>
    )
}


const BigCardsBlock = () => {
    return (
        <>
            <AboutCardBig
                title={"Гарантия"}
                src={garantier}
                text={"Бесплатно отремонтируем авто, либо вернем деньги в случае поломки в течение месяца"}
            />
            <AboutCardBig
                title={"Закрытые базы"}
                src={closeBase}
                text={"Имеем доступы к закрытым базам продажи автомобилей, благодаря чему забираем лучшие варианты!"}
            />
            <AboutCardBig
                title={"Специальное оборудование"}
                src={specialEquipment}
                text={"Проведем техническую проверку автомобиля с использованием специального оборудования"}
            />
            <AboutCardBig
                title={"Проверяем документы"}
                src={checkingDocuments}
                text={"Проверим автомобиль на наличие арестов, залогов, ограничений"}
            />
            <AboutCardBig
                title={"Торг в вашу пользу"}
                src={moreCoin}
                text={"Проведем аргументированный торг с продавцом в вашу пользу"}
            />
            <AboutCardBig
                title={"Сделка под ключ"}
                src={offerUnderKEy}
                text={"Оформим сделку под ключ, с постановкой авто на учет в МРЭО"}
            />
        </>
    )
}

const Block = ({isBig = false, title, className}) => {
    return (
        <section className={styles.wrapper}>
            <div className={cn(styles.section,className)}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <div className={styles.blocks}>
                    {
                        isBig ? <BigCardsBlock/> : <SmallCardsBlock/>
                    }
                </div>
            </div>
        </section>
    )
}


const ChooseCarCTA = () => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.cta}>
            <Button
                text={"Подобрать автомобиль"}
                className={styles.btn}
                onClick={()=>dispatch({type:OPEN_MODAL})}
            />
            <p className={styles.comment}>
                С нами вы экономите время, нервы и деньги!
            </p>
        </div>
    )
}



export const Cards = () => {
    return (

        <WaveWrapper src={bcg} alt={"Waves"} >
            <Block title={"Для поиска автомобиля нужно:"} className={styles.mt60}/>
            <Block isBig={true} title={"Почему именно мы?"} className={styles.second}/>
            <ChooseCarCTA/>
        </WaveWrapper>
    );
};

