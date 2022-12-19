import s from './Fiolete.module.css';

export const Fiolete = () => {
    return (
        <>
            <div className={s.container1}>
                <div className={s.img_left}>
                    <img src={'./Data/content_501.jpeg'} />
                </div>
                <div className={s.descrip_right}>
                    <div>
                        <p className={s.title}>ЖК Сиреневый парк</p>
                        <p className={s.green_text}>
                            Благоустройство территории
                        </p>
                        <p className={s.text}>
                            Комплекс находится в окружении лесных и парковых
                            зон. В четырехстах метрах от границ жилого проекта
                            начинается территория Национального парка «Лосиный
                            остров». К востоку от ЖК «Сиреневый парк»
                            расположена уютная зона отдыха Бабаевского пруда с
                            зонами для отдыха и детскими площадками.
                            Благоустройство территории, установка малых
                            архитектурных форм, установка детских игровых
                            комплексов.
                        </p>
                    </div>
                    <div className={s.descrip_image}>
                        <img src={'./Data/content_281.jpeg'} />
                    </div>
                </div>
            </div>

            <div className={s.container2}>
                <div className={s.img}>
                    <img src={'./Data/content_400.jpeg'} />
                </div>
                <div className={s.img}>
                    <img src={'./Data/content_401.jpeg'} />
                </div>
                <div className={s.img}>
                    <img src={'./Data/content_402.jpeg'} />
                </div>
            </div>

            <div className={s.container3}>
                <div className={s.container3_right_side}>
                    <div>
                        <p className={s.title}>
                            ЖК «Переделкино Ближнее Город-парк»
                        </p>
                        <p className={s.green_text}>
                            Благоустройство территории
                        </p>
                        <p className={s.text}>
                            «Переделкино Ближнее» — это масштабный проект
                            города-парка, который возводится в Новой Москве
                            девелопером «Абсолют Недвижимость». Микрорайон,
                            разместившийся на территории Внуковского поселения,
                            состоит из 71 разновысотных панельных и монолитных
                            новостроек. Все корпуса отличаются яркой наружной
                            отделкой, выполненной из высококачественных навесных
                            панелей и разноцветной краски, и безупречными
                            эксплуатационными характеристиками. Высота зданий в
                            городе-парке варьируется от 9 до 25 этажей.
                            Изготовление теневых навесов по индивидуальным
                            чертежам. Разработка концепции.
                        </p>
                    </div>
                    <div className={s.left_side_img}>
                        <div>
                            <img src={'./Data/content_700.jpeg'} />
                        </div>
                        <div>
                            <img src={'./Data/content_701.jpeg'} />
                        </div>
                    </div>
                </div>
                <div className={s.container3_right_side}>
                    <img src={'./Data/content_601.jpeg'} />
                </div>
            </div>

            <div className={s.container4}>
                <div className={s.img_first}>
                    <img src={'./Data/content_805.jpeg'} />
                </div>
                <div className={s.img_second_block}>
                    <div className={s.img}>
                        <img src={'./Data/content_806.jpeg'} />
                    </div>
                    <div className={s.img}>
                        <img src={'./Data/content_807.jpeg'} />
                    </div>
                </div>
            </div>
        </>
    );
};
