import s from './Delivery.module.css';

export const Delivery = () => {
    return (
        <div className="container">
            <div className={s.wrapper}>
                <h1 className={s.title}>доставка и оплата</h1>
                <div className={s.text}>
                    <p>
                        Доставка осуществляется во все города РФ и ближнего
                        зарубежья по выбору Заказчика:
                    </p>
                    <p>
                        Отправка транспортной компанией по вашему выбору в
                        отдаленные районы. Стоимость доставки оговаривается
                        индивидуально и зависит от объема заказа и
                        территориального расположения доставки груза.
                    </p>
                    <p>
                        Самовывоз со склада из Москвы возможен по
                        предварительному согласованию. При наличии товара на
                        складе доставка по Москве в течение 2-3 дней фирменным
                        автотранспортом.
                    </p>
                    <p>
                        Всю подробную информацию о сроках, стоимости доставки в
                        регионы России и ближнего зарубежья, Вы можете узнать по
                        телефону или по почте.
                    </p>
                    <p>+7 (495) 787 00 39</p>
                    <p>kmv@larixgroup.ru</p>
                    <p>n.solovev@larixgroup.ru</p>
                </div>
            </div>
        </div>
    );
};