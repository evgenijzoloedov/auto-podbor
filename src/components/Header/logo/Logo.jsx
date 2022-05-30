import React from 'react';
import logo from '../../../assets/images/Logo.png'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
export const Logo = ({src,color}) => {
    return (

        <Link to={"/"} className={styles.link}>
            <img src={logo} alt={"Logo"} />
            <span>Честный<br/> автоподбор</span>
        </Link>

    );
};

