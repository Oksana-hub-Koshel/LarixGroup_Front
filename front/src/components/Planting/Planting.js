import React, {useState} from 'react';
import s from './Planting.module.css';
import {Discount2} from '../ProjectPage/Discount2/Discount2';
import {Experience} from './Experience/Experience';
import {Conditions} from '../ProjectPage/Conditions/Conditions';
import {Partners} from '../AboutPage/Partners/Partners';
import {Carrying} from './Carrying/Carrying';
import {Modal} from '../Modal/Modal';

export const Planting = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <article className={s.article}>
                <div className={s.img_setting}>
                    <h5>УСТРОЕНО РАЗУМНО — УСТРОНЕНО КРАСИВО</h5>
                    <h2>
                        Озеленим
                        <br />
                        территорию
                    </h2>
                    <h4>Разобъём сад, который будет радовать много лет</h4>
                    <button
                        className={s.btn_call}
                        onClick={() => setModalActive(true)}>
                        Связаться
                    </button>
                    <Modal active={modalActive} setActive={setModalActive} />
                    <img
                        className={s.img_one}
                        src={
                            'https://www.larixgroup.ru/uploads/ckeditor/pictures/676/content_bush-left.png'
                        }
                    />
                    <img
                        className={s.img_two}
                        src={
                            'https://www.larixgroup.ru/uploads/ckeditor/pictures/677/content_bush-right.png'
                        }
                    />
                </div>
            </article>

            <div className="container">
                <Discount2 />

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
            </div>

            <section className={s.text}>
                <div className={s.block_2}>
                    <div className={s.left_block}>
                        <span>Жизнь растений — целая наука</span>
                        <h2>
                            Профессиональное озеленение — это гораздо больше,
                            чем просто украшение ландшафта
                        </h2>
                        <p>
                            Необходим грамотный план, чтобы светолюбивые
                            растения не оказались в тени, а теплолюбивые не
                            зябли. Важно правильно сочетать растения между
                            собой, чтобы на следующий год не появились
                            прогалины. Нужно внимательно отбирать растенияв
                            питомнике и закупать только те, которые без проблем
                            приживутся
                        </p>
                    </div>
                    <div className={s.brefno}>
                        <div className={s.border}>
                            <div className={s.border_setting}>
                                <img
                                    alt=""
                                    className={s.image}
                                    src="https://www.larixgroup.ru/uploads/ckeditor/pictures/654/content_bark.png"
                                />
                            </div>
                        </div>
                        <div className={s.brefno_text}>
                            <span className={s.brefno_text_one}>
                                Агротекстиль, мульча, удобрения должны быть
                                качественными
                            </span>
                            <span className={s.brefno_text_two}>
                                Наконец, заниматься посадками должны проверенные
                                специалисты, которые умеют беречь растения. В
                                этих вопросах нет мелочей
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Experience />
            <Carrying />
            <div className="container">
                <Conditions />
                <Partners />
            </div>
        </div>
    );
};
