import styles from "./SuccessUpload.module.scss";
import React from "react";

export const SuccessUpload = () => {
    return (
        <>
            <section className={styles.modal}>
                <h3 className={styles.title}>
                    Спасибо, мы скоро с вами<br/> свяжемся!
                </h3>
                <p className={styles.simpleText}>
                    А пока что вы можете познакомиться с нашей группой <span
                    className={styles.href}>ВКонтакте</span> и каналом на <span
                    className={styles.href}>YouTube</span>
                </p>
            </section>
        </>
    )
}