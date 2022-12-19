import s from './Map.module.css';

export const Map = () => {
    return (
        <>
            <div className={s.page_title}>
                <h2>НАШИ РАБОТЫ</h2>
            </div>

            <article className={s.article_wrapp}>
                <h1>ПОРТФОЛИО ПРОЕКТОВ</h1>

                <div className={s.image_wrapp_block}>
                    <div className={s.block1}>
                        <img src={'./Data/content_ландшафт2.jpeg'} />
                    </div>
                    <div></div>
                </div>
            </article>

            <div className={s.map_block}>
                <div className={s.map}>
                    <img src={'./Data/content_КАРТА2.jpeg'} />
                </div>

                <div className={s.map_descrip}>
                    <p> Карта объектов</p>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_1-2.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span>МЕГА Теплый стан</span>
                        </div>
                        <div className={s.address}>
                            <span> Калужское шоссе, 21-й километр, с1</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_2.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Внуково 2017</span>
                        </div>
                        <div className={s.address}>
                            <span>Москва, ул. Омская, д. 1 – 21</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_3.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span>МЕГА Химки</span>
                        </div>
                        <div className={s.address}>
                            <span>Московская обл., г. Химки, ул.</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_4.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span>ЖК Скандинавия</span>
                        </div>
                        <div className={s.address}>
                            <span>Ленинградская, д. 39 стр. 5</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_5.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Испанские Кварталы</span>
                        </div>
                        <div className={s.address}>
                            <span> ул. Сервантеса, 1, корп. 1</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_6.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Сердце Столицы</span>
                        </div>
                        <div className={s.address}>
                            <span> Москва, Шелепихинская наб. 34</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_7.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Фили Сити</span>
                        </div>
                        <div className={s.address}>
                            <span>
                                {' '}
                                Москва, Багратионовский пр., 5, корп. 1
                            </span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_8-2.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> Апарт-отель Caméo Moscow Villas</span>
                        </div>
                        <div className={s.address}>
                            <span> Москва, Долгоруковская 23а</span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_9-2.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> Бизнес-парк Химки</span>
                        </div>
                        <div className={s.address}>
                            <span>
                                {' '}
                                Московская область, Химки, Ленинградская улица,{' '}
                                <br />
                                39, стр. 6
                            </span>
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_10.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Сиреневый парк</span>
                        </div>
                        <div className={s.address}>
                            <span> Москва, ул. Тагильская 4</span>
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>
                            <img src={'./Data/content_11.jpeg'} />
                        </div>
                        <div className={s.address}>
                            <span> ЖК Переделкино Ближнее – город-парк </span>
                        </div>
                        <div className={s.address}>
                            <span>
                                {' '}
                                Новая Москва, д. Рассказовка, уч. 13/2, корп.
                                1-13
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
