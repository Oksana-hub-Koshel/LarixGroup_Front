import s from './Carrying.module.css';

import InputElement from 'react-input-mask';
import {Link} from 'react-router-dom';
import {Privacy} from '../../Pivacy/Privacy';
import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

export const Carrying = () => {
    const [modalActive, setModalActive] = useState(false);
    const normalizePhone = phone => {
        return parseInt(phone.replace(/[^0-9]/g, ''));
    };

    const handleData = e => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/appeals/create/individual',
            headers: {},
            data: {
                username: e.username,
                telephone: e.telephone,
                email: e.email,
                comment: e.comment,
            },
        }).then(response => {
            console.log(response);
        });
        reset({telephone: '', username: '', email: '', comment: ''});
    };

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'});

    return (
        <>
            <div className={s.container}>
                <img src="./Data/content_leaves.png" className={s.img1} />
                <img src="./Data/content_leaves2.png" className={s.img2} />
                <img src="./Data/content_leaves3.png" className={s.img3} />
                <div className={s.descrip_block}>
                    <h2 className={s.title}>
                        Перед началом посадок нужно позаботиться о почве
                    </h2>
                    <p className={s.text}>
                        Нужно внести удобрения, вспахать землю, вырыть ямы может
                        потребоваться подсыпка плодородного слоя
                    </p>
                    <p className={s.text}>
                        Цветы сажают весной, но многие другие работы по
                        озеленению проходят осенью или даже зимой. В это время
                        деревья «спят» и настаёт лучшее время для их пересадки.
                        Землю под клумбы тоже нужно готовить осенью. Подготовку
                        к озеленению лучше начинать с осени
                    </p>
                    <img
                        src="./Data/content_soil.png"
                        className={s.image_soil}
                    />
                </div>
            </div>

            <div className={s.container_form}>
                <div className={s.container_2}>
                    <h2 className={s.container2_title}>Закажите озеленение</h2>
                    <form
                        autoComplete="off"
                        className={s.form_order}
                        onSubmit={handleSubmit(handleData)}>
                        <div className={s.order_input_high}>
                            <div className={s.input_wrapp}>
                                <label className="label">Имя и фамилия</label>
                                <input
                                    className="input_field"
                                    {...register('username', {
                                        required:
                                            'Поле обязательно к заполнению',
                                        minLength: {
                                            value: 3,
                                            message: ' Минимум 3 символа',
                                        },
                                    })}
                                />
                                <div className="error">
                                    {errors?.username?.message}
                                </div>
                            </div>
                            <div className={s.input_wrapp}>
                                <label className="label">
                                    Электронная почта
                                </label>
                                <input
                                    className="input_field"
                                    {...register('email', {
                                        required:
                                            'Поле обязательно к заполнению',
                                        pattern: {
                                            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                            message: ' Некорректный email',
                                        },
                                    })}
                                />
                                <div className="error">
                                    {errors?.email?.message}
                                </div>
                            </div>
                        </div>
                        <div className={s.order_input_low}>
                            <div>
                                <label className="label">Телефон</label>
                                <InputElement
                                    className="input_field"
                                    mask="+7 (999) 999-99-99"
                                    maskChar=" "
                                    normalize={normalizePhone}
                                    {...register('telephone', {
                                        required:
                                            'Поле обязательно к заполнению',
                                    })}
                                />
                                <div className="error">
                                    {errors?.telephone?.message}
                                </div>
                            </div>
                            <div>
                                <label className="label">Комментарии</label>
                                <textarea
                                    type="text"
                                    className="input_field"
                                    {...register('comment', {
                                        required:
                                            'Поле обязательно к заполнению',
                                    })}
                                />
                                <div className="error">
                                    {errors?.comment?.message}
                                </div>
                            </div>
                            <div className={s.order_checkbox}>
                                <input type="checkbox" />
                                <label className={s.label_order}>
                                    Я согласен{' '}
                                    <Link to="/privacy" component={<Privacy />}>
                                        <span>с условиями</span>
                                    </Link>
                                </label>
                            </div>
                            <button className={s.btn_order} type="submit">
                                связаться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
