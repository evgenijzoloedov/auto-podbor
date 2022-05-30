import React from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import {ExternalLink} from "../../UI/externalLink";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";

const Col = ({firstLink,secondLink, thirdLink}) =>{
    return (
        <div className={styles.col}>
            <ExternalLink href={"/"} className={styles.link}>{firstLink}</ExternalLink>
            <ExternalLink href={"/"} className={styles.link}>{secondLink}</ExternalLink>
            <ExternalLink href={"/"} className={styles.link}>{thirdLink}</ExternalLink>
        </div>
    )
}


export const Menu = () => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.fullMenu}>
            <div className={styles.col}>
                <a  className={styles.link} href={`/#services`}>цены и Услуги</a>
                <Link to={"/about"} className={styles.link}>О компании</Link>
                <a  className={styles.link} href={`/#examples`}>подобранные авто</a>
            </div>
            <div className={styles.col}>
                <a  className={styles.link} href={`/#feedback`}>отзывы</a>
                <Link to={"/about"} className={styles.link}>блог</Link>
                <span className={styles.link} onClick={()=>dispatch({type:OPEN_MODAL})}>контакты</span>
            </div>

        </div>
    );
};




