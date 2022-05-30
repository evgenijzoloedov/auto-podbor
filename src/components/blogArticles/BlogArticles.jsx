import React from 'react';
import {BlogCard} from "../cards/blogCard";
import styles from './BlogArticles.module.scss'

export const BlogArticles = ({posts,style}) => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container} style={style}>

                {
                    posts.map((post)=><BlogCard key={post.id} post={post} isRow={false}/>)
                }

            </div>
        </section>
    );
};

