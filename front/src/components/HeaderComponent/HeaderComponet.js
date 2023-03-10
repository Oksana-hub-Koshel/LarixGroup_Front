import styles from './header_component.module.css';
import {Link, NavLink, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {Manifucture} from '../HomePage/Manifucture/Manifucture';
import {Icon} from '@iconify/react';
import {Modal} from '../Modal/Modal';
import {useSelector} from 'react-redux';

export const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [bg, setBg] = useState();
    const data = useSelector(state => state.basket.dataBasket);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    let location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                return setBg('house');
            case '/catalog':
                return setBg('');
            case '/individual':
                return setBg('park');
            case '/about':
                return setBg('house');
            case '/contacts':
                return setBg('');
            case '/portfolio':
                return setBg('');
            default:
                return setBg('');
        }
    }, [location.pathname]);

    return (
        <>
            <div className={`${bg} wrapper `}>
                <div className="container">
                    <div className={styles.header_info}>
                        <div className={styles.info_left}>
                            <div className={styles.logo_address}>
                                <div className={styles.logo_block}>
                                    <Link to="/" className={styles.logo}>
                                        Larix Group
                                    </Link>
                                </div>
                                <div className={styles.address}>
                                    <div>
                                        <a
                                            href="tel:+74957870039"
                                            className={styles.number_telephone}>
                                            +7 (495) 787 00 39
                                        </a>
                                    </div>
                                    <div>????????????</div>
                                    <div>
                                        <span>???? - ????&nbsp;&nbsp;</span>
                                        <span>9:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.logo_text}>
                                <h5 className={styles.name}>
                                    ???????????????????? ???????????????????????? ????????????????
                                </h5>
                                <h5>???????????????????????? ?????????? ?????????????????????????? ????????</h5>
                            </div>
                        </div>
                        <button
                            className={styles.call_me}
                            onClick={() => setModalActive(true)}>
                            <p className={styles.call_me_text}>
                                ?????????????????????? ??????
                            </p>
                        </button>
                        <Modal
                            active={modalActive}
                            setActive={setModalActive}
                        />
                    </div>
                    <div className={styles.header_control_global}>
                        <div className={styles.header_control}>
                            <nav className={styles.header_nav}>
                                <label htmlFor="btn-menu"></label>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ??????????????
                                </NavLink>
                                <NavLink
                                    to="/catalog"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ??????????????
                                </NavLink>
                                <NavLink
                                    to="/individual"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ???????????????????????????? ??????
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ?? ??????
                                </NavLink>
                                <NavLink
                                    to="/contacts"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ????????????????
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    className={({isActive}) =>
                                        isActive
                                            ? styles.nav_link
                                            : styles.nav_link
                                    }>
                                    ??????????????????
                                </NavLink>
                            </nav>
                        </div>
                        <div className={styles.header_control}>
                            <img
                                src={
                                    '/Data/cart-full-450f2499c3ee4b7d9c4a3ef1bf326b224542340f0f0b9c30368ff01f5dae871e.png'
                                }
                                alt=""
                                className={
                                    !modalIsOpen
                                        ? styles.bucket_img
                                        : styles.bucket_img_none
                                }
                            />
                            <img
                                src={
                                    '/Data/hum-menu-a33e4f3e6a9947da2544f2c1349e3ade926359e9a57a1ce31a7c065365de4c2c.png'
                                }
                                alt=""
                                className={
                                    !modalIsOpen
                                        ? styles.menu_img
                                        : styles.bucket_img_none
                                }
                                onClick={openModal}
                            />
                            {modalIsOpen && (
                                <div className={styles.dropdown}>
                                    <div className={styles.list_menu}>
                                        <h2>????????</h2>
                                        <ul className={styles.list}>
                                            <li className={styles.item}>
                                                <Link to="/">??????????????</Link>
                                            </li>
                                            <li className={styles.item}>
                                                <Link to="/catalog">
                                                    ??????????????
                                                </Link>
                                            </li>
                                            <li className={styles.item}>
                                                <Link to="/individual">
                                                    ???????????????????????????? ??????
                                                </Link>
                                            </li>
                                            <li className={styles.item}>
                                                <Link to="/about">?? ??????</Link>
                                            </li>
                                            <li className={styles.item}>
                                                <Link to="/contacts">
                                                    ????????????????
                                                </Link>
                                            </li>
                                            <li className={styles.item}>
                                                <Link to="/portfolio">
                                                    ??????????????????
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className={styles.menu_info}>
                                            <div className={styles.text_high}>
                                                <h3>+7 (495) 787 00 39</h3>
                                                <p>zakaz@larixgroup.ru</p>
                                                <p>???????????????????? 9:00 ???? 19:00</p>
                                            </div>
                                            <div className={styles.text_low}>
                                                <p>
                                                    ????????????????????- ????????????????????????
                                                    ????????????????
                                                </p>
                                                <p>
                                                    ???????????????????????? ??????????
                                                    ?????????????????????????? ????????
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon
                                            icon="akar-icons:cross"
                                            color="black"
                                            vFlip={true}
                                            onClick={closeModal}
                                            className={styles.cross_icon}
                                        />
                                    </div>
                                </div>
                            )}
                            <Link to="/Basket">
                                <div className={styles.control_backet}>
                                    <div
                                        className={styles.control_backet_title}>
                                        <p>???????? ??????????????</p>
                                    </div>
                                    <div
                                        className={styles.control_backet_count}>
                                        {data.length === 0
                                            ? '??????????'
                                            : data.length === 1
                                            ? data.length + ' ??????????'
                                            : (data.length >= 2 &&
                                                  data.length) <= 4
                                            ? data.length + ' ????????????'
                                            : data.length >= 5
                                            ? data.length + ' ??????????????'
                                            : '??????????'}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {bg && <Manifucture />}
                </div>
            </div>
        </>
    );
};
