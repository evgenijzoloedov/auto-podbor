import React from 'react';
import {CustomForm} from "./CustomForm";
import styles from './Form.module.scss'
import cn from "classnames";
import {UPLOAD_AND_NEXT_MODAL, useModalContext} from "../../../contexts/ModalContext";
export const FullFormWrapper = ({children}) => {

    return (
        <div className={cn(styles.formWrapper)}>
            {children}
        </div>
    );
};

