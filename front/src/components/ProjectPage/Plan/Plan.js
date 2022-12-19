import s from './Plan.module.css';

export const Plan = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.block_left}>
                    <div className={s.block_left_wrapp}>
                        <img src={'./Data/medal.png'} />
                        <div className={s.award_text}>
                            <p className={s.award_first}>Премия</p>
                            <p className={s.award_second}>
                                Urban
                                <br />
                                Awards
                            </p>
                        </div>
                    </div>
                </div>

                <div className={s.block}>
                    <p>Работаем</p>
                    <p>
                        с <span>2005</span> года
                    </p>
                </div>
                <div className={s.block}>
                    <p>
                        Более <span>250</span>
                    </p>
                    <p>проектов</p>
                </div>
            </div>

            <div className={s.container2}>
                <div className={s.wrapper2}>
                    <div className={s.cont2_left}>
                        <h2>
                            Работа начинается с плана, а план начинается с идеи
                        </h2>
                        <p>Мы готовы включиться на любом этапе</p>
                        <ul className={s.list}>
                            <li className={s.list_block}>
                                <p className={s.first_column}>
                                    Перед вами стоит задача обустроить
                                    территорию?
                                </p>
                                <img src="./Data/content_left-arrow.png" />
                                <p className={s.second_column}>
                                    Предложим идеи и концепции
                                </p>
                            </li>
                            <li className={s.list_block}>
                                <p className={s.first_column}>
                                    У вас уже есть эскизы?
                                </p>
                                <img src="./Data/content_left-arrow.png" />
                                <p className={s.second_column}>
                                    {' '}
                                    Создадим по ним рабочий проект, займёмся
                                    технологиями
                                </p>
                            </li>
                            <li className={s.list_block}>
                                <p className={s.first_column}>
                                    Готов дизайн и архитектура участка?
                                </p>
                                <img src="./Data/content_left-arrow.png" />
                                <p className={s.second_column}>
                                    Уточним подробности и приступим к реализации
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={s.content_right}>
                        <img src="./Data/content_b-work.png" />
                    </div>
                </div>
            </div>
        </>
    );
};
