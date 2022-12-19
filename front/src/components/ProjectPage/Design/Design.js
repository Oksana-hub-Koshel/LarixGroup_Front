import s from './Design.module.css';

export const Design = () => {
    return (
        <div className={s.container}>
            <img src="./Data/content_pencil.png" className={s.pencil_img} />
            <div className={s.text_wrapp}>
                <div className={s.first_center}>
                    <h2 className={s.logo}>Почему важен дизайн-проект</h2>
                    <p className={s.text}>
                        Благоустроенный ландшафт — это не неподвижная картина,
                        на которую любуются со стороны. Это часть живой природы
                        и часть человеческого жилья
                    </p>
                    <p className={s.text2}>
                        А грамотный дизайн-проект — не просто красивое
                        оформление
                    </p>
                    <p className={s.text2}>
                        Чтобы ландшафт был долговечным, в проекте необходимо
                        учесть множество факторов. Проект необходим даже для
                        маленького личного участка — иначе, к примеру, первый же
                        ливень может залить все посадки и подтопить дом
                    </p>
                    <div className={s.project_about}>
                        Только по готовому проекту можно точно рассчитать полную
                        сметную стоимость и график производства работ
                    </div>
                </div>
                <div className={s.list_line}>
                    <div className={s.list_item}>
                        <img src="./Data/content_icn-trace.png" />
                        <p className={s.descrip1}>
                            Неправильно
                            <br /> проложены тропинки?
                        </p>
                        <p className={s.descrip2}>
                            Жители протопчут свои <br />
                            собственные
                        </p>
                    </div>
                    <div className={s.list_item}>
                        <img src="./Data/content_icn-floor.png" />
                        <p className={s.descrip1}>
                            Подобраны не те <br />
                            материалы?
                        </p>
                        <p className={s.descrip2}>
                            Через пару сезонов их придётся
                            <br /> менять
                        </p>
                    </div>
                    <div className={s.list_item}>
                        <img src="./Data/content_icn-lamp.png" />
                        <p className={s.descrip1}>
                            Неправильно
                            <br /> размещён свет?
                        </p>
                        <p className={s.descrip2}>Будет темно и неуютно</p>
                    </div>
                    <div className={s.list_item}>
                        <img src="./Data/content_icn-flower.png" />
                        <p className={s.descrip1}>
                            Неправильно
                            <br /> выбраны растения?
                        </p>
                        <p className={s.descrip2}>
                            Не будут цвести или даже
                            <br /> погибнут
                        </p>
                    </div>
                </div>
                <div className={s.low_block}>
                    <p>
                        Вы сможете спланировать бюджет И, конечно, на этапе
                        проектирования можно внести любые изменения, пока не
                        поздно
                    </p>
                </div>
            </div>
        </div>
    );
};
