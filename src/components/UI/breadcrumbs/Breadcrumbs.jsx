import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import styles from './Breadcrumbs.module.scss'


export const Breadcrumbs = ({text}) => {

    return (
        <div className={styles.container}>
            <Breadcrumb >
                <Breadcrumb.Item href="/" className={styles.item}>Главная страница</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {text}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

