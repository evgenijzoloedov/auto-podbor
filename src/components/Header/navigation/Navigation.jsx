import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";


const NavItem = ({children}) => {
    return (
        <li className={styles.item} >
            {children}
        </li>
    )
}




const NavList = () => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                <a href={`/#services`}>цены и Услуги</a>
            </NavItem>

            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                <a href={`/#examples`}>подобранные авто</a>
            </NavItem>

            <NavItem>
                <a href={`/#feedback`}>отзывы</a>
            </NavItem>

            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>

            <NavItem >
                <span onClick={()=>dispatch({type:OPEN_MODAL})}>Контакты</span>
            </NavItem>
        </ul>
    )
}


export const Navigation = ({className}) => {
    return (
        <nav className={cn(styles.navigation, className)}>
            <NavList/>
        </nav>
    );
};


export const NavigationMobile = () => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem>
                <a href={`/#services`}>цены и Услуги</a>
            </NavItem>

            <NavItem>
                <Link to={'/about'}>О компании</Link>
            </NavItem>

            <NavItem>
                <a href={`/#examples`}>подобранные авто</a>
            </NavItem>

            <NavItem>
                <a href={`/#feedback`}>отзывы</a>
            </NavItem>

            <NavItem>
                <Link to={'/blog'}>блог</Link>
            </NavItem>

            <NavItem >
                <span onClick={()=>dispatch({type:OPEN_MODAL})}>Контакты</span>
            </NavItem>
        </ul>
    )
}

