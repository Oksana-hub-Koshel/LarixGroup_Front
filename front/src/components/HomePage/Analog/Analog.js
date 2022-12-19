import s from './Analog.module.css';
import {Link} from 'react-router-dom';
import {Privacy} from '../../Pivacy/Privacy';
import {useForm} from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import InputElement from 'react-input-mask';

export const Analog = () => {
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
        <div className={s.wrapper}>
            <div className={s.order_promo}>
                <div className={s.order_promo_left}>
                    <p>
                        Доставка МАФ по
                        <br />
                        всем городам России и<br /> ближнего зарубежья
                    </p>
                    <p>
                        Сборка, монтаж и шеф-
                        <br />
                        монтаж в Москве и других
                        <br /> регионах РФ
                    </p>
                </div>

                <div className={s.order_promo_right}>
                    <h2>Подобрать аналог</h2>
                    <p>
                        Мы можем подобрать более недорогой аналог из нашего
                        ассортимента
                        <br />в т.ч. импортозамещающий. Отправьте нам чертеж и
                        ТЗ и получите расчет стоимости
                    </p>
                </div>
            </div>
            <form
                autoComplete="off"
                className={s.form_wrapper}
                onSubmit={handleSubmit(handleData)}>
                <div className={s.order_inputs}>
                    <div className={s.order_inputs_wrapp}>
                        <label className="label">Имя и фамилия</label>
                        <input
                            className={s.input_field}
                            {...register('username', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 3,
                                    message: ' Минимум 3 символа',
                                },
                            })}
                        />
                        <div className="error">{errors?.username?.message}</div>
                    </div>

                    <div className={s.order_inputs_wrapp}>
                        <label className="label">Электронная почта</label>
                        <input
                            className={s.input_field}
                            {...register('email', {
                                required: true,
                                pattern: {
                                    value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                    message: ' Некорректный email',
                                },
                            })}
                        />
                        <div className="error">{errors?.email?.message}</div>
                    </div>
                </div>

                <div className={s.order_inputs2}>
                    <div className={s.order_inputs_wrapp}>
                        <label className="label">Телефон</label>
                        <InputElement
                            className={s.input_field}
                            mask="+7 (999) 999-99-99"
                            maskChar=" "
                            normalize={normalizePhone}
                            {...register('telephone', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />
                        <div className="error">
                            {errors?.telephone?.message}
                        </div>
                    </div>

                    <div className={s.order_inputs_wrapp}>
                        <label className="label">Комментарии</label>
                        <textarea
                            type="text"
                            className={s.input_field}
                            {...register('comment', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />
                        <div className="error">{errors?.comment?.message}</div>
                    </div>
                </div>

                <div className={s.order_attach}>
                    <img src="./Data/clip.png" />
                    <label className={s.label_attach}>
                        <input type={'file'} />
                        <p>Приложите файлы для расчета стоимости</p>
                    </label>
                </div>

                <div className={s.order_checkbox}>
                    <input type="checkbox" name="feedback" />

                    <label className={s.label_order}>
                        Я согласен{' '}
                        <Link to="/privacy" component={<Privacy />}>
                            <span>с условиями</span>
                        </Link>
                    </label>
                </div>
                <input
                    type="submit"
                    name="commit"
                    value="рассчитать стоимость"
                    className={s.btn_cost}
                    placeholder="рассчитать стоимость"
                    disabled={!isValid}
                />
            </form>
        </div>
    );
};
