import React from 'react';
import styles from './Selection.module.scss'
import {StagesOfSelectionCard} from "../../cards/stagesOfSelectionCard";
import first from '../../../assets/images/stagesOfSelection/1.png'
import second from '../../../assets/images/stagesOfSelection/2.png'
import third from '../../../assets/images/stagesOfSelection/3.png'
import fourth from '../../../assets/images/stagesOfSelection/4.png'
import fifth from '../../../assets/images/stagesOfSelection/5.png'
import sixth from '../../../assets/images/stagesOfSelection/6.png'
import carAndTrees from '../../../assets/images/stagesOfSelection/carAndTrees.png'
import trees from '../../../assets/images/stagesOfSelection/tree.png'
import white from '../../../assets/images/waves/whiteMainRec.jpg'
export const Selection = () => {
    return (
        <section className={styles.wrapper}>

            <img src={carAndTrees} alt={"carAndTrees"} className={styles.carAndTrees}/>
            <img src={trees} alt={"trees"} className={styles.trees}/>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Этапы подбора автомобиля
                </h2>
                <div className={styles.cardContainer}>
                    <StagesOfSelectionCard
                        src={first}
                        title={"Обращение в Честный автоподбор"}>
                        Вы оставляете заявку на сайте или звоните на номер <b>+7 (999) 200 93 30</b>.
                        <br/>
                        Мы обсуждаем ваши желания и вопросы. Даем свои рекомендации, отталкиваясь от ситуации на рынке.
                        Договариваемся о стоимости автомобиля.
                    </StagesOfSelectionCard>
                    <StagesOfSelectionCard
                        src={second}
                        title={"Договор и предоплата"}>
                        Вы посещаете наш офис, либо оставляете паспортные данные и подписываете договор удаленно.
                        Вносите задаток 50% от общей суммы. Остальное оплачивается после того, как автомобиль будет
                        подобран. Работаем официально, с предоставлением чеков об оплате услуг.
                    </StagesOfSelectionCard>
                    <StagesOfSelectionCard
                        src={third}
                        title={"Поиск автомобиля"}>
                        Мы мониторим рынок с помощью специализированных программ и анализируем предложения. Получаем
                        информацию о свежих поступлениях авто со всех официальных автосалонов, из закрытых баз, напрямую
                        от собственников. Среднее время поиска - 10 дней
                    </StagesOfSelectionCard>
                    <StagesOfSelectionCard
                        src={fourth}
                        title={"Юридическая проверка автомобиля"}>
                        Проверяем работали ли бывшие владельцы автомобиля в такси. Сверяем были ли случаи ДТП, угона,
                        запрета на регистрацию, ВИН и гос. номера. Сообщаем вам о найденных вариантах авто,
                        согласовываем выбор, исходя из ваших пожеланий.
                    </StagesOfSelectionCard>
                    <StagesOfSelectionCard
                        src={fifth}
                        title={"Техническая проверка и тест-драйв"}>
                        Если автомобиль вам понравился, мы встречаемся с продавцом. Осматриваем все основные узли и
                        системы машины с использованием специализированного оборудования. Предоставляем вам фото и видео
                        отчет об авто.
                    </StagesOfSelectionCard>
                    <StagesOfSelectionCard
                        src={sixth}
                        title={"Сделка и оформление документов на авто"}>
                        Торгуемся с продавцом. Для клиентов, которые не могут оперативно приехать и купить машину, мы
                        можем забронировать автомобиль на 2-3 дня. Помогаем оформить документы на автомобиль и поставить
                        его на учет в ГИБДД.
                    </StagesOfSelectionCard>
                </div>
            </div>
        </section>
    );
};

