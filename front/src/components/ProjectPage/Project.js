import s from './Project.module.css';
import {Discount2} from './Discount2/Discount2';
import {Plan} from './Plan/Plan';
import {Design} from './Design/Design';
import {Conditions} from './Conditions/Conditions';
import {OrderProject} from './Order_project/Order_project';
import {Landscape} from './Landscape/Landscape';
import {Partners} from '../AboutPage/Partners/Partners';
import {Modal} from '../Modal/Modal';
import React, {useState} from 'react';

export const Project = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className={s.container}>
                <img
                    src="./Data/content_img-left-proectirovanie.png"
                    className={s.img1}
                />
                <img
                    src="./Data/content_img-right-proectirovanie.png"
                    className={s.img2}
                />
                <div className={s.wrapper}>
                    <p className={s.text_high}>
                        УСТРОЕНО РАЗУМНО — УСТРОНЕНО КРАСИВО
                    </p>
                    <h1 className={s.title}>
                        Проэктирование
                        <br />
                        для ланшафтного
                        <br />
                        строительства
                    </h1>
                    <p className={s.text_low}>
                        Включимся на любом этапе и составим
                        <br />
                        все необходимые планы и чертежи
                    </p>
                    <button
                        className={s.btn}
                        onClick={() => setModalActive(true)}>
                        связаться
                    </button>
                    <Modal active={modalActive} setActive={setModalActive} />
                </div>
            </div>
            <div className="container">
                <Discount2 />
                <Plan />
            </div>
            <Design />
            <div className="container">
                <Conditions />
            </div>
            <OrderProject />
            <div className="container">
                <Landscape />
                <Partners />
            </div>
        </>
    );
};
