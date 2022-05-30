import React from 'react';
import {Logo} from "./logo";
import styles from './Footer.module.scss'
import {Call} from "../Header/call";
import {Address} from "../Header/address";
import {Menu} from "./menu";
import {Waiting} from "./waiting";
import {Link} from "react-router-dom";
import {ExternalLink} from "../UI/externalLink";

export const Footer = () => {
    return (
        <footer className={styles.black}>

            <div className={styles.container}>
                <div className={styles.footer}>
                    <Logo/>
                    <Menu/>
                    <div className={styles.addressCall}>
                        <Address isBlack={false}/>
                        <Call isBlack={false}/>
                    </div>
                    <Waiting/>
                </div>
                <div className={styles.policyblock}>
                    <Link to={'privacy'} className={styles.policy}>
                        Политика конфиденциальности
                    </Link>
                    <ExternalLink href={"https://ozzostudio.ru/"} className={styles.companylink}> Сайт сделан ozzostudio.ru</ExternalLink>
                </div>
            </div>
        </footer>
    );
};

