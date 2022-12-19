import s from './Promo.module.css';

export const Promo = () => {
    return (
        <div className={s.container}>
            <div className={s.promo_wrapper}>
                <div className={s.item_number}>
                    01 - <span>02</span>
                </div>
                <div className={s.item_image}>
                    <img src={'./Data/slide1.png'} />
                </div>
                <div className={s.item_title}>
                    <h4>Разработаем проект</h4>
                    <p>Идея, концепция, дизайн и инженерный проект</p>
                    <a href="/Users/oksanakoshel/Documents/Larixgroup_frontend/front/public">
                        Подробнее
                    </a>
                </div>
            </div>

            <div className={s.promo_wrapper}>
                <div className={s.item_number}>
                    01 - <span>02</span>
                </div>
                <div className={s.item_image}>
                    <img src={'./Data/slide2.png'} />
                </div>
                <div className={s.item_title}>
                    <h4> Разобьем сад</h4>
                    <p>Деревья, газон и цветы</p>
                    <a href="/Users/oksanakoshel/Documents/Larixgroup_frontend/front/public">
                        Подробнее
                    </a>
                </div>
            </div>
            <div className={s.promo_wrapper}>
                <div className={s.item_number}>
                    01 - <span>02</span>
                </div>
                <div className={s.item_image}>
                    <img src={'./Data/slide3.png'} />
                </div>
                <div className={s.item_title}>
                    <h4>Полностью благоустроим территорию</h4>
                    <p>
                        Фонтаны и водоёмы, дренаж и полив, металлоконструкции,
                        дорожки, площадки и освещение
                    </p>
                    <a href="/Users/oksanakoshel/Documents/Larixgroup_frontend/front/public">
                        Подробнее
                    </a>
                </div>
            </div>
            <div className={s.promo_wrapper}>
                <div className={s.item_number}>
                    01 - <span>02</span>
                </div>
                <div className={s.item_image}>
                    <img src={'./Data/rabbit_1.png'} />
                </div>
                <div className={s.item_title}>
                    <h4>Украсим малыми архитектурными формами</h4>
                    <p>
                        Собственное производство, мы можем изготовить
                        практически любые МАФ. В том числе по проектам заказчика
                    </p>
                    <a href="/Users/oksanakoshel/Documents/Larixgroup_frontend/front/public">
                        Подробнее
                    </a>
                </div>
            </div>
            <div className={s.padding}></div>
        </div>
    );
};
