import React, {useEffect, useState} from 'react';
import styles from './MainAbout.module.scss'
import slider1 from '../../../assets/images/aboutPage/abou1.jpg'
import slider2 from '../../../assets/images/aboutPage/abou2.jpg'
import slider3 from '../../../assets/images/aboutPage/abou3.jpg'
import slider4 from '../../../assets/images/aboutPage/abou4.jpg'
import {Carousel} from "react-bootstrap";
import {ReactComponent as Next} from '../../../assets/images/aboutPage/next.svg'
import {ReactComponent as Prev} from '../../../assets/images/aboutPage/prev.svg'
import spare1 from '../../../assets/images/aboutPage/spare1.png'
import spare2 from '../../../assets/images/aboutPage/spare2.png'
import {getCompanyInfo} from "../../../api/companyInfoAPI";

const Slider = () => {
    return(
        <Carousel indicators={false} prevIcon={<Prev/>} nextIcon={<Next/>}>
            <Carousel.Item interval={5000}>
                <img className={styles.item}
                    src={slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={styles.item}
                    src={slider2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={styles.item}
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={styles.item}
                    src={slider4}
                    alt="fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}


export const MainAbout = () => {
    const [companyInfo,setCompanyInfo] = useState({})


    useEffect(()=>{
        (async ()=>{
            await getCompanyInfo().then(setCompanyInfo)
        })()
    },[])


    return (
        <section className={styles.wrapper} style={{paddingBottom:"100px"}}>
            <img src={spare1} alt={"spare1"} className={styles.spare1}/>
            <img src={spare2} alt={"spare2"} className={styles.spare2}/>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        О компании
                    </h1>
                    <div dangerouslySetInnerHTML={{__html: companyInfo.info}}/>
                </div>
                <Slider/>
            </div>
        </section>
    );
};

