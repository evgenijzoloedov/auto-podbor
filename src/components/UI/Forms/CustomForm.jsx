import React from 'react';
import {Formik, Field, Form} from 'formik';
import {FeedbackSchemas} from "./Schemas";
import {NamedInput, PhoneNumberInput} from "../inputs";
import styles from './Form.module.scss'
import {Button} from "../button";

function validateNumber(phoneNumber) {
    let error

    if (phoneNumber.replace("_", "").trim().length !== 18) {
        error = "Это еще не номер телефона"
    }
    return error;
}


export const CustomForm = ({isRow,upload}) => {

    return (
        <div>
            <Formik
                initialValues={{
                    telephone: '',
                    full_name: '',
                }}
                validationSchema={FeedbackSchemas}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    upload(values)
                }}

            >
                {({errors, touched}) => (
                    <Form className={styles.form}>
                        <div className={isRow ? styles.rowInputs : ""}>
                            <div>
                                <Field name="full_name" as={NamedInput} placeholder={"Иванов Иван"} label={"Ваше имя"}/>
                                {errors.full_name && touched.full_name ? (
                                    <div className={styles.error}>{errors.full_name}</div>
                                ) : null}
                            </div>
                            <div>
                                <Field name="telephone" as={PhoneNumberInput} label={"Ваш телефон"}
                                       validate={validateNumber}/>
                                {errors.telephone && touched.telephone ? (
                                    <div className={styles.error}>{errors.telephone}</div>
                                ) : null}
                            </div>
                        </div>
                        <p className={styles.disclaimer}>
                            При отправке данных вы соглашаетесь на обработку <span className={styles.underline}>персональных данных</span>
                        </p>
                        <Button type="submit" text={"Получить консультацию"} className={styles.btn} />
                    </Form>
                )}
            </Formik>


        </div>
    );
};
