import React from 'react';
import {ShadowCard} from "../shadowCard";
import styles from './PriceCard.module.scss'
import {Button} from "../../UI/button";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
import {Link} from "react-router-dom";

const CircleIcon = ({component}) => {
    return (
        <div className={styles.circleOut}>
            <div className={styles.circleIn}>
                <div className={styles.img}>
                    <img src={component} alt={"circle icon"}/>
                </div>
            </div>
        </div>
    )
}


const Price = ({price}) => {
    return (
        <div className={styles.price}>
            от <span className={styles.priceNumber}>{price}</span> ₽
        </div>
    )
}


export const PriceCard = ({price, title, component, text, id = 1}) => {
    const {dispatch} = useModalContext()
    return (
        <ShadowCard className={styles.mb56}>
            <div className={styles.card}>
                <CircleIcon component={component}/>


                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                    <Price price={price}/>
                    <Button className={styles.button} text={"Оставить заявку"} onClick={() => {
                        dispatch({type: OPEN_MODAL})
                    }}/>
                    <Link to={`/service/${id}`} className={styles.more}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </ShadowCard>
    );
};



