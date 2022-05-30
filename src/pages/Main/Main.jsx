import React, {useEffect} from 'react';
import {Questions} from "../../components/Main/Questions";
import {Choice} from "../../components/Main/choice";
import {ServicesAndPrices} from "../../components/Main/servicesAndPrices";
import {Problems} from "../../components/Main/problems";
import {Check} from "../../components/Main/Check";
import {Examples} from "../../components/Main/Examples";
import {Maps} from "../../components/Main/Map";
import {Promo} from "../../components/Main/promo";
import {Selection} from "../../components/Main/selection";
import {Feedback} from "../../components/Main/feedback";
import styles from "../../components/Main/Check/Check.module.scss";
import blackBcg from "../../assets/images/waves/mainBlackRec.jpg";
import orangeSquare from "../../assets/images/questions/orangeSquare.png";
import bcg from "../../assets/images/questions/bcg.png";
import style from './Main.module.scss'
import {RoadToCenter} from "../../components/Main/RoadToCenter";
import garantier from '../../assets/images/garant/garan.png'
import {Garantier} from "../../components/Main/garantier";
import {FormBlock} from "../../components/FormBlock";
import white from "../../assets/images/waves/whiteMainRec.png";
import {WaveWrapper} from "../../components/wavesWrapper";
import AOS from 'aos'

import {AnimateWrapper} from "../../components/animateWrapper";

export const Main = () => {
    // useEffect(() => {
    //     AOS.init({
    //         offset: 200,
    //         duration: 1000,
    //         easing: 'linear',
    //         delay: 400,
    //         once: false,
    //         disable: 'mobile',
    //         anchorPlacement:'top-top',
    //         mirror: false
    //     });
    // }, [])
    return (
        <main>
            <Promo/>
            <AnimateWrapper animate={"fade-right"}>
                <Choice/>
            </AnimateWrapper>
            <AnimateWrapper animate={"fade-left"}>
                <ServicesAndPrices/>
            </AnimateWrapper>
            <AnimateWrapper animate={"fade-right"}>
                <Problems/>
            </AnimateWrapper>
            <section className={styles.black}>
                <img src={blackBcg} alt={"Black background"} className={styles.img}/>
                <AnimateWrapper animate={"fade-left"}>
                    <Check/>
                </AnimateWrapper>
                <AnimateWrapper animate={"fade-right"}>
                    <FormBlock style={{padding:"100px 0"}}/>
                </AnimateWrapper>
                <AnimateWrapper animate={"fade-left"}>
                    <Examples/>
                </AnimateWrapper>
                <AnimateWrapper animate={"fade-right"}>
                    <Feedback/>
                </AnimateWrapper>
                <WaveWrapper src={white} alt={"white background"}>
                    <AnimateWrapper animate={"fade-left"}>
                        <Selection/>
                    </AnimateWrapper>
                </WaveWrapper>


                <div className={style.back}>
                    <img src={garantier} alt={"Гарант"} className={style.garantier}/>
                    <AnimateWrapper animate={"fade-right"}>
                        <Garantier/>
                    </AnimateWrapper>
                </div>
                <div className={style.back}>
                    <img src={orangeSquare} className={style.orangeSquare} alt={"orangeSquare"}/>
                    <img src={bcg} className={style.bcg} alt={"bcg"} height={805}/>
                    <AnimateWrapper animate={"fade-left"}>
                        <Questions/>
                    </AnimateWrapper>
                    <RoadToCenter/>
                </div>
            </section>
            <Maps/>
        </main>
    );
};

