import React from 'react';
import s from './Footer.module.css';
import {Delivery} from '../DeliveryPage/Delivery';
import {Link} from 'react-router-dom';
import {Installation} from '../InstallationPage/Installation';
import {Privacy} from '../Pivacy/Privacy';
import {Project} from '../ProjectPage/Project';
import {Vacancy} from '../VacancyPage/Vacancy';

export const Footer = () => {
    const handleClick = () => {
        window.scroll(0, 700);
    };
    const handleClickScrollUp = () => {
        window.scroll(0, 0);
    };

    return (
        <div className={s.wrapp}>
            <div className="container">
                <footer className={s.footer}>
                    <div className={s.block_first}>
                        <h3>LARIX GROUP</h3>
                        <a className={s.phone} href="tel:+7 (495) 7870039">
                            +7 (495) 7870039
                        </a>
                        <a
                            className={s.email}
                            href="mailto:zakaz@larixgroup.ru">
                            zakaz@larixgroup.ru
                        </a>
                        <div className={s.icons}>
                            <a href="/">
                                <img alt="" src={'/img/Icon/vk-i.svg'} />
                            </a>
                            <a href="/">
                                <img alt="" src={'/img/Icon/facebook-i.svg'} />
                            </a>
                            <a href="/">
                                <img alt="" src={'/img/Icon/youtube-i.svg'} />
                            </a>
                        </div>
                    </div>

                    <div className={s.first_column}>
                        <a href={'/planting'}>Озеленение</a>
                        <a>Благоустройство</a>
                        <Link to="/project" component={<Project />}>
                            <div onClick={handleClickScrollUp}>
                                Проэктирование
                            </div>
                        </Link>
                    </div>

                    <div className={s.second_column}>
                        <Link to="/delivery" component={<Delivery />}>
                            <div onClick={handleClickScrollUp}>
                                Доставка и оплата
                            </div>
                        </Link>
                        <Link to="/installation" component={<Installation />}>
                            <div onClick={handleClickScrollUp}>
                                Сборка и монтаж
                            </div>
                        </Link>
                    </div>

                    <div className={s.third_column}>
                        <Link to="/about" component={<Privacy />}>
                            <div onClick={handleClick}>О компании</div>
                        </Link>

                        <Link to="/vacancy" component={<Vacancy />}>
                            <div onClick={handleClickScrollUp}>Вакансии</div>
                        </Link>
                        <Link to="/privacy" component={<Privacy />}>
                            <div onClick={handleClickScrollUp}>
                                Политика конфидициальности
                            </div>
                        </Link>
                    </div>

                    <div className={s.contacts}>
                        <p className={s.title}>Москва, Россия</p>
                        <p className={s.time_work}>
                            {' '}
                            Большая филевская 33 Пн-Пт,
                            <br /> 09:00-18:00{' '}
                        </p>
                    </div>

                    <div className={s.block_last}>
                        <div className={s.contacts_low}>
                            <a className={s.num} href="tel:+7 (495) 7870039">
                                +7 (495) 7870039
                            </a>
                            <a
                                className={s.eemail}
                                href="mailto:zakaz@larixgroup.ru">
                                zakaz@larixgroup.ru
                            </a>
                        </div>
                        <div className={s.icons_low}>
                            <a href="/">
                                <img alt="" src={'./img/Icon/vk-i.svg'} />
                            </a>
                            <a href="/">
                                <img alt="" src={'./img/Icon/facebook-i.svg'} />
                            </a>
                            <a href="/">
                                <img alt="" src={'./img/Icon/youtube-i.svg'} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
