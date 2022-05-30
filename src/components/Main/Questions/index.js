import React, {useEffect, useState} from 'react';
import {Accordion} from "react-bootstrap";
import styles from './Questions.module.scss'
import {SecondStep} from "../../FormBlock/FormBlock";
import {postFeedback} from "../../../api/feedbackAPI";
import {FirstStep} from "./Form/Form";
import {getAccordions} from "../../../api/accordionAPI";



const AccordionItem = ({header,body,eventKey}) => {
    return (
        <>
            <Accordion.Item eventKey={eventKey} className={styles.accordionItem}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body >
                    {body}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}


const QuestionsExpanded = () => {
    const [quizes, setQuizes] = useState([])

    useEffect(()=>{
        (async ()=>{
            await getAccordions().then(res=>setQuizes(res))
        })()
    },[])
    return (
        <>
            <Accordion className={styles.accordionContainer}>
                {quizes.map((quiz,index)=><AccordionItem
                        header={quiz.question}
                        body={quiz.answer}
                        key={index}
                        eventKey={index}
                    />)}
            </Accordion>
        </>
    );
};


const AccordionBlock = () => {
    return (
        <div className={styles.quizBlock}>
            <h2 className={styles.quizTitle}>
                Часто задаваемые вопросы
            </h2>
            <QuestionsExpanded/>
        </div>
    )
}






export const Questions = () => {
    const [count,setCount] = useState(1)
    const onUploadPosts = (body) => {
        (async ()=>{
            await postFeedback(body)
        })()
        setCount(2)
    }



    return (
        <section className={styles.wrapper}>
            <AccordionBlock/>

                {count === 1?
                    <FirstStep onUploadPosts={onUploadPosts}/>
                    :
                    <SecondStep wrapper={styles.secondStepWrapper}/>
                }

        </section>
    )
}