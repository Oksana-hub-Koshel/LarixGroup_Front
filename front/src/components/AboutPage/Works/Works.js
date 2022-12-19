import s from './Works.module.css';
import {Link} from 'react-router-dom';

export const Works = () => {
    return (
        <div className={s.container}>
            <div className={s.works_title}>
                <h2>Наши работы</h2>
                <Link to="/portfolio">Смотреть еще</Link>
            </div>
            <hr className={s.hr} />

            <div className={s.works_items}>
                <div className={s.gorizontal_first}>
                    <div className={s.gorizontal_image}>
                        <img
                            src={'./Data/content_proshkino.png'}
                            className={s.image}
                        />
                    </div>

                    <div className={s.gorizontal_descrip}>
                        <h3>
                            Испанские кварталы современный благоустроеный
                            микрорайон у метро «Прошкино»
                        </h3>
                        <p>
                            Испанские кварталы район, расположенный в 4,7 км от
                            МКАД по Калужскому шоссе. Спланирован испанскими
                            архитекторами по принципу квартальной застройки
                            Барселоны
                        </p>
                        <a className={s.link}>Подробнее</a>
                    </div>
                </div>
                <div className={s.vertical_first_left}>
                    <img
                        src={'./Data/content_scandinavia.png'}
                        className={s.image_left}
                    />
                    <div className={s.opacity_black}></div>
                    <div className={s.vertical_left_descrip}>
                        <h3>
                            Жилой комплекс <br />
                            «Скандинавия» за МКАДОМ
                        </h3>
                        <p>
                            Жилой район «Скандинавия» находится всего в 6,5
                            <br /> км от МКАД и сочетает комфорт большого города
                            с <br />
                            преимуществами загородной жизни. Он дышит
                            <br /> свежим воздухом настоящего леса и имеет
                            <br /> удобный выезд на строящуюся скоростную трассу
                            <br /> Солнцево – Бутово – Варшавское шоссе
                        </p>
                        <a>Подробнее</a>
                    </div>
                </div>

                <div className={s.vertical_second_right}>
                    <img src={'./Data/content_marroitt.png'} />

                    <div className={s.vertical_second_descrip}>
                        <h3>
                            Элитный отель «Marroitt» в величественном здании в
                            стиле модерн
                        </h3>
                        <p>
                            Испанские кварталы район, расположенный в 4,7 км от
                            МКАД по Калужскому шоссе. Спланирован испанскими
                            архитекторами по принципу квартальной застройки
                            Барселоны
                        </p>
                        <a>Подробнее</a>
                    </div>
                </div>

                <div className={s.gorizontal_second}>
                    <div className={s.gorizontal_image}>
                        <img src={'./Data/content_azimut.png'} />
                    </div>
                    <div className={s.gorizontal_descrip}>
                        <h3>
                            Роскошный отель «Азимут» на самой окраине
                            Санкт-Петербурга
                        </h3>
                        <p>
                            Ежедневно гостей AZIMUT Отель Сибирь ждет богатый
                            завтрак и, по желанию, ужин в формате «Шведский
                            Стол», а также изысканные десерты ручной работы в
                            кондитерской
                        </p>
                        <a> Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
