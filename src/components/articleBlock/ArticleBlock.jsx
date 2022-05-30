import React from 'react';
import styles from "./ArticleBlock.module.scss"
import video from '../../assets/images/video.jpg'
import christmasTree from '../../assets/images/article/christmasTree.png'
import carAndTree from '../../assets/images/article/carAndTree.png'
import {convertToRussianDate} from "../../utils/date";


export const ArticleBlock = ({post}) => {

    const newYoutubeLink = post?.asset.replace("watch?v=","embed/")

    return (
        <section className={styles.wrapper}>
            <img src={christmasTree} alt={"Брелок"} className={styles.tree}/>
            <img src={carAndTree} alt={"Car with tree"} className={styles.car} />
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1>
                            {post?.title}
                        </h1>
                        <span>{convertToRussianDate(post?.created)}</span>
                    </div>

                    <div className={styles.iframe}>
                        <iframe src={newYoutubeLink} className={styles.img}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        <p className={styles.text}>
                            {post?.content}
                        </p>
                    </div>
                </div>
                <div className={styles.line}/>
            </div>
        </section>
    );
};

