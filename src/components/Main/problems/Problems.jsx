import React from 'react';
import styles from "./Problems.module.scss";
import {ProblemCard} from "../../cards/problemCard";
import delerships from "../../../assets/images/problems/delerships.jpg"
import dtp from "../../../assets/images/problems/dtp.jpg"
import vin from "../../../assets/images/problems/vin.jpg"
import mileage from "../../../assets/images/problems/mileage.jpg"
import layer from "../../../assets/images/problems/layer.jpg"
import speed from "../../../assets/images/problems/speed.jpg"
import men from "../../../assets/images/problems/men.png"
import cn from "classnames";

export const Problems = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.blue}/>
            <div className={styles.pink}/>
            <h2 className={styles.title}>Проблемы при<br/> самостоятельной покупке</h2>
            <img src={men} alt={"men"} className={styles.men} />
            <div className={styles.content}>

                <div className={cn(styles.row,styles.first)}>
                    <ProblemCard
                        src={mileage}
                        title={"Юридические проблемы"}
                        text={"Кредитные, залоговые авто, двойники и “перебитые”, с запретами и ограничениями"}
                        number={1}
                    />
                    <ProblemCard
                        src={layer}
                        title={"Восстановление после ДТП"}
                        text={"Цена ремонта скрытых дефектов после ДТП может удвоить стоимость авто"}
                        number={2}
                    />
                </div>
                <div className={cn(styles.row,styles.second)}>
                    <ProblemCard
                        src={dtp}
                        title={"Восстановление после ДТП"}
                        text={"Цена ремонта скрытых дефектов после ДТП может удвоить стоимость авто"}
                        number={3}
                    />
                    <ProblemCard
                        src={vin}
                        title={"Подмена VIN-номера"}
                        text={"При подаче объявления указывают VIN-номер автомобиля-двойника"}
                        number={4}
                    />
                </div>
                <div className={cn(styles.row,styles.third)}>
                    <ProblemCard
                        src={delerships}
                        title={"Серые автосалоны"}
                        text={"При подаче объявления указывают VIN-номер автомобиля-двойника"}
                        number={5}
                    />
                    <ProblemCard
                        src={speed}
                        title={`Перепрошитые "мозги"`}
                        text={"Некачественная прошивка электроники выводит приборы из строя"}
                        number={6}
                    />
                </div>
            </div>
        </section>
    );
};

