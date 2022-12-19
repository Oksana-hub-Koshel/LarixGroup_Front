import s from './Reasons.module.css';

export const Reasons = () => {
    return (
        <div className={s.container_global}>
            <div className={s.container_reasons}>
                <h2>Пять причин</h2>
                <h3>почему вы можете положиться на LarixGroup </h3>
                <div className={s.reasons_group}>
                    <div className={s.reason_items}>
                        <img
                            src={'./Data/content_worker.png'}
                            className={s.item_img}
                        />
                        <div className={s.reasons_info_work}>
                            <h4>Реализация "от и до"</h4>
                            <p>
                                LarixGroup — генподрядчик. Мы <br />
                                реализуем ваш проект «от и до»,
                                <br /> начиная от эскиза и заканчивая
                                <br /> высадкой растений и установкой
                                <br /> малых архитектурных форм
                            </p>
                        </div>
                    </div>
                    <div className={s.reason_items}>
                        <img
                            src={'./Data/content_world.png'}
                            className={s.item_img}
                        />
                        <div className={s.reasons_info_work}>
                            <h4>Следуем трендам</h4>
                            <p>
                                Мы используем лучший европейский
                                <br /> и мировой опыт, Следуем мировым
                                <br /> трендам в области технологии
                                <br /> архитекутры ландшафтного
                                <br /> строительства
                            </p>
                        </div>
                    </div>
                    <div className={s.reason_items}>
                        <img
                            src={'./Data/content_hand.png'}
                            className={s.item_img}
                        />
                        <div className={s.reasons_info_work}>
                            <h4>Низкие цены</h4>
                            <p>
                                Держим низкие цены на МАФ за счёт
                                <br /> собственного производства. Можем
                                <br /> изготовить практически любые МАФ
                                <br /> по индивидуальным проектам
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.reasons_licence}>
                    <div className={s.licence_left}>
                        <div className={s.licence_info}>
                            <h3>Допуски и лицензии</h3>
                            <p>
                                Имеем все допуски и<br /> лицензии СРО, работаем
                                по
                                <br />
                                СНиП
                            </p>
                        </div>
                        <div className={s.licence_img}>
                            <img src={'./Data/content_license.png'} />
                        </div>
                    </div>
                    <div className={s.licence_right}>
                        <div className={s.licence_title}>
                            <p className={s.licence_name}>Иван Барский</p>
                            <p className={s.licence_work}>Архитектор</p>
                        </div>
                        <div className={s.licence_prof}>
                            <h3>
                                Рабочие —<br /> профессионалы
                            </h3>
                            <p>
                                На наших объектах работают только
                                <br /> квалифицированные рабочие-
                                <br />
                                строители
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.reasons_proffesional}>
                    <img src={'./Data/content_main_professional.png'} />
                </div>
            </div>
        </div>
    );
};
