import React from 'react';
import logo from '../../../assets/images/logo-black.svg'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
export const Logo = () => {
    return (

        <Link to={"/"} className={styles.link}>
            <img src={logo} alt={"Logo"} />
            <span>Честный<br/> автоподбор</span>
        </Link>

    );
};

