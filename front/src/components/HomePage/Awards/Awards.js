import s from './Awards.module.css';

export const Awards = () => {
    return (
        <div className={s.urban}>
            <div className={s.urban_left}>
                <div className={s.urban_image}></div>
                <p className={s.urban_small_text}>Премия</p>
                <p className={s.urban_large_text}>
                    URBAN
                    <br /> AWARDS
                </p>
            </div>
            <div className={s.urban_center}>
                <p className={s.large_text}>
                    {' '}
                    Мы готовы включиться в работу на любом этапе
                </p>
                <p className={s.small_text}>
                    Нужен красивый и современный, технически грамотно
                    реализованный ландшафный дизайн, который долгие годы будет
                    радовать глаз? Для вас работает LarixGroup. От создания
                    дизайн поекта до реализации проекта с полным озеленением,
                    благоустройством территории, изготовлением и поставкой МАФ
                </p>
            </div>
            <div className={s.urban_right}>
                <div className={s.urban_right_left}>
                    <p className={s.right_large}>2005</p>
                    <p className={s.right_small}>Работаем с 2005 года</p>
                </div>
                <div className={s.urban_right_right}>
                    <p className={s.right_large}>250</p>
                    <p className={s.right_small}>Более 250 проектов</p>
                </div>
            </div>
        </div>
    );
};
