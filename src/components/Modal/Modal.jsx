import {Modal} from "react-bootstrap";
import {ReactComponent as Close} from '../../assets/images/modal/close.svg'
import styles from './Modal.module.scss'
import React, {useState} from "react";
import square from '../../assets/images/modal/square.png'
import {CLOSE_MODAL, UPLOAD_AND_NEXT_MODAL, useModalContext} from "../../contexts/ModalContext";
import {SuccessUpload} from "./SuccessUpload";
import {FullFormWrapper} from "../UI/Forms/FullForm";
import {CustomForm} from "../UI/Forms/CustomForm";


const MainModal = () => {
    const {dispatch} = useModalContext()
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Остались вопросы?
                </h3>
                <p className={styles.subtitle}>
                    Позвоните нам
                </p>

                <a href={"/"} className={styles.phoneNumber}>
                    +7 (999) 200-93-30
                </a>
                <p className={styles.subtitle}>
                    или заполните заявку на бесплатную консультацию
                </p>
                <CustomForm isRow={true} upload={(values)=>dispatch({type:UPLOAD_AND_NEXT_MODAL,payload:values})}/>
            </section>
            <img src={square} alt={"square"} className={styles.img}/>
        </>
    )
}


export const ConsultationModal = () => {

    const {state, dispatch} = useModalContext()


    return (
        <Modal
            show={state.isOpen}
            onHide={() => dispatch({type: CLOSE_MODAL})}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/*<FullFormWrapper>*/}
                {
                    state.count === 1 ? <MainModal/> : <SuccessUpload/>
                }
            {/*</FullFormWrapper>*/}
            <div className={styles.close}>
                <Close onClick={() => dispatch({type: CLOSE_MODAL})}/>
            </div>
        </Modal>
    );
}


