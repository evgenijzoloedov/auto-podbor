import React from 'react';
import styles from './Feedback.module.scss'
import yandex from '../../../assets/images/main/yandex.png'
import vk from '../../../assets/images/main/vk.png'
import map from '../../../assets/images/main/mapOfRussia.png'
import {Button} from "../../UI/button";
import cn from "classnames";
import {ExternalLink} from "../../UI/externalLink";
import {ReactComponent as Prev} from "../../../assets/images/breadcrumbs/prev.svg"
import {ReactComponent as Next} from "../../../assets/images/breadcrumbs/next.svg"
import arm from '../../../assets/images/main/arm.png'
import phone from '../../../assets/images/main/phone.png'
import ReactElasticCarousel from "react-elastic-carousel";
import {useMediaQuery} from "react-responsive";

// const PhoneSlider = () => {
//     return (
//         <div className={styles.sliderWrapper}>
//             <div className={styles.phoneButton}>
//
//                 <img src={phone} alt={"phone"}/>
//                 <ExternalLink href={"https://vk.com/wall-177600442?own=1"} className={cn(styles.review, styles.link)}>
//                     <Button text={"смотреть все отзывы"} className={styles.btn}/>
//                 </ExternalLink>
//
//             </div>
//         </div>
//     )
// }

const PhoneSlider = () => {
    const isMobile = useMediaQuery({query: `(max-width: 980px)`})
    return (
        <>

            <ReactElasticCarousel
                itemsToShow={isMobile ? 1 : 3}
                initialActiveIndex={2}
                showArrows={false}
                enableMouseSwipe={false}
                style={{alignItems: "center"}}>

                <img src={phone} alt={"phone"}/>
                <img src={phone} alt={"phone"}/>
                {/*{*/}
                {/*    isMobile ? <img src={phone} alt={"phone"}/> : <img src={arm} alt={"arm"}/>*/}
                {/*}*/}
                <img src={phone} alt={"phone"}/>
            </ReactElasticCarousel>
        </>
    )
}


const SocialItem = ({src, children}) => {
    return (
        <>
            <div className={styles.socialItem}>
                <img src={src} alt={'reviews'}/>
                <p className={styles.text}>
                    {
                        children
                    }
                </p>
            </div>
        </>
    )
}

export const Feedback = () => {


    return (
        <section className={styles.bck} id={"feedback"}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Отзывы клиентов
                </h2>
                <div className={styles.social}>
                    <SocialItem src={yandex}>
                        Более 45 отзывов на <ExternalLink href={"https://yandex.ru/profile/185334738407"}
                                                          className={styles.underline}>&nbsp;Яндекс</ExternalLink>
                        &nbsp;со средней оценкой 5.0

                    </SocialItem>
                    <SocialItem src={vk}>
                        Более 1200 положительных
                        отзывов в группе <ExternalLink href={"https://vk.com/wall-177600442?own=1"}
                                                       className={styles.underline}>&nbsp;ВКонтакте</ExternalLink>
                    </SocialItem>
                </div>
            </div>
            <div className={styles.mapWrapper}>
                <img src={map} className={styles.map} alt={"map of russia"}/>
                <PhoneSlider/>
            </div>
        </section>
    );
};

