import React from 'react';
import styles from './ExampleCard.module.scss'
import car from '../../../assets/images/example/car.png'
import {Button} from "../../UI/button";
import cn from "classnames";

export const ExampleSmall = ({post,setCurrent}) => {
    return (
        <div className={styles.small}>
            <img src={post.img}/>
            <div className={styles.row}>
                <div className={styles.texts}>
                    <h3 className={cn(styles.textBold, styles.mb0)}>{post.car_name}</h3>
                    <h4 className={cn(styles.prices,styles.mb0)}>{post.after_price}, {post.year_of_issue} г.</h4>
                </div>
                <Button text={"Смотреть"} className={styles.button} onClick={()=>setCurrent(post)}/>
            </div>
        </div>
    );
};

