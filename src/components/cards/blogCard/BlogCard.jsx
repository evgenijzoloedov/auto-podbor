import React from 'react';
import styles from './BlogCard.module.scss'
import video from '../../../assets/images/video.jpg'
import {Button} from "../../UI/button";
import {convertToRussianPointDate} from "../../../utils/date";
import {useNavigate} from "react-router";


export const BlogCard = ({post, isRow}) => {
    const nav = useNavigate()
    return (
        <div className={isRow ? styles.cardRow : styles.cardCol}>
            <img src={post.asset} alt={"video"} className={styles.img} width={300} height={225}/>
            <div className={isRow? styles.content: ''}>
                <h3 className={styles.title}>
                    {post.title}
                </h3>
                <p className={styles.text}>
                    {post.content}
                </p>
                <span className={styles.date}>
                {convertToRussianPointDate(post.created)}
            </span>
            </div>

            <Button text={"Читать"} className={styles.btn} onClick={() => nav(`/article/${post.id}`)}/>
        </div>
    );
};




