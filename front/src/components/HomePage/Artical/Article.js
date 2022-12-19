import s from './Artical.module.css';

export const Article = () => {
    return (
        <div className={s.container}>
            <div className={s.adventure}>
                <div className={s.advent_items}>
                    <div className={s.advent_image}>
                        <img src={'./Data/content_instrument.png'} />
                    </div>
                    <div className={s.advent_title}>Концепция</div>
                    <div className={s.advent_descrip}>
                        Создадим концепцию проекта в <br />
                        согласии с вашими желаниями
                        <br /> или воплотим в жизнь готовую
                    </div>
                </div>

                <div className={s.advent_items}>
                    <div className={s.advent_image}>
                        <img src={'./Data/content_calendar.png'} />
                    </div>
                    <div className={s.advent_title}>Следим за работой</div>
                    <div className={s.advent_descrip}>
                        Каждый день следим за ходом
                        <br /> работы на строительном <br />
                        объекте
                    </div>
                </div>

                <div className={s.advent_items}>
                    <div className={s.advent_image}>
                        <img src={'./Data/content_tools.png'} />
                    </div>
                    <div className={s.advent_title}>Производство</div>
                    <div className={s.advent_descrip}>
                        Сами производим МАФ –<br /> безопасные, экологичные,
                        <br /> долговечные и красивые
                    </div>
                </div>
                <div className={s.advent_items}>
                    <div className={s.advent_image}>
                        <img src={'./Data/content_rub.png'} />
                    </div>
                    <div className={s.advent_title}>Бюджет</div>
                    <div className={s.advent_descrip}>
                        Бережём бюджет с<br /> сохранением качества <br />
                        работы
                    </div>
                </div>
            </div>
        </div>
    );
};
