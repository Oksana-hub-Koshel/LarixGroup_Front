import s from './Delivery.module.css';

export const Delivery = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.container_left}>
                    <h2 className={s.visible_title}>Доставка и оплата</h2>

                    <div className={s.car_image}>
                        <img
                            src={
                                './Data/track-e6061916ede2e1bb5b9ca71c50d923374fd85b51401f915e6c98d10662e9a35a.png'
                            }
                        />
                    </div>
                </div>
                <div className={s.container_right}>
                    <h2 className={s.hidden}>Доставка и оплата</h2>
                    <p className={s.info}>
                        Доставка осуществляется во все города РФ и ближнего
                        зарубежья по выбору Заказчика:
                    </p>
                    <p className={s.info}>
                        Отправка транспортной компанией по вашему выбору в
                        отдаленные районы. Стоимость доставки оговаривается
                        индивидуально и зависит от объема заказа и
                        территориального расположения доставки груза
                    </p>
                    <p className={s.info}>
                        Самовывоз со склада из Москвы возможен по
                        предварительному согласованию. При наличии товара на
                        складе доставка по Москве в течение 2-3 дней фирменным
                        автотранспортом
                    </p>
                    <div className={s.delivery_contact}>
                        <p>
                            Всю подробную информацию о сроках, стоимости
                            доставки в регионыРоссии и ближнего зарубежья, Вы
                            можете узнать по телефону или по почте
                        </p>
                        <p>
                            <a
                                href="tel:+7(495)7870039"
                                className={s.delivery_phone}>
                                {' '}
                                +7 (495) 78700 39
                            </a>
                            <span className={s.delivery_email}>
                                zakaz@larixgroup.ru
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.low_block_container}>
                <div className={s.delivery_low_block_left}>
                    <h2 className={s.visible_title}>
                        Сброка, монтаж и шеф-монтаж
                    </h2>

                    <img
                        src={
                            './Data/chest-b2aeff4987b9991f827592fbdbaf1c7f679ca2d679dcaaadee9f68aafeb10c20.png'
                        }
                    />
                </div>
                <div className={s.delivery_low_block_right}>
                    <div className={s.container_right_low}>
                        <h2 className={s.hidden}>
                            Сброка, монтаж и шеф-монтаж
                        </h2>
                        <p className={s.info}>
                            Мы предоставляем услугу сборки, монтажа и
                            шеф-монтажа в Москве и в других регилнах России.
                        </p>
                        <p className={s.info}>
                            Продукция поставляется в комплекте с техническим
                            паспортом,ведомостью элементов с крепежом и схемой
                            сборки и монтажа. Если у Вас нет возможности
                            самостоятельно установить оборудование, Вы всегда
                            можете обратиться за помощью к нашим специалистам.
                        </p>
                        <p className={s.info}>
                            Так же компания предлагает отдельную услугу -
                            шеф-монтаж.
                        </p>
                        <div className={s.delivery_contact}>
                            <p>
                                Стоимость услуг по сборке и шеф-монтажу вы
                                можете узнать по телефону или по почте
                            </p>
                            <p>
                                <a
                                    href="tel:+7(495)7870039"
                                    className={s.delivery_phone}>
                                    {' '}
                                    +7 (495) 78700 39
                                </a>
                                <span className={s.delivery_email}>
                                    zakaz@larixgroup.ru
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
