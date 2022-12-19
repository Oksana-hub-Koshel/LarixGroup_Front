import s from './Discount2.module.css';
import {Link} from 'react-router-dom';
import {Privacy} from '../../Pivacy/Privacy';
import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import InputElement from 'react-input-mask';

export const Discount2 = () => {
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

    const onSubmit = data => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <div className={s.container}>
            <h2>
                <span> 50%</span> на проектирование при заказе благоустройства
            </h2>
            <form
                autoComplete="off"
                className={s.form_order}
                onSubmit={handleSubmit(handleData)}>
                <div className={s.order_input_high}>
                    <div className={s.input_wrapp}>
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
                    <div className={s.input_wrapp}>
                        <label className="label">Электронная почта</label>
                        <input
                            className={s.input_field}
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                    message: ' Некорректный email',
                                },
                            })}
                        />
                        <div className="error">{errors?.email?.message}</div>
                    </div>

                    <div className={s.order_attach}>
                        <img src="./Data/clip-light-513af91bedd2f2c762e3bba86f41134277a1c9f33e366596196403869a828c84.png" />
                        <label className="label_attach">
                            <input type={'file'} />
                            <p>Приложите файлы для расчета стоимости</p>
                        </label>
                    </div>
                </div>
                <div className={s.order_input_low}>
                    <div>
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
                    <div>
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
                    <div className={s.order_checkbox}>
                        <input type="checkbox" />
                        <label className={s.label_order}>
                            Я согласен{' '}
                            <Link to="/privacy" component={<Privacy />}>
                                <span>с условиями</span>
                            </Link>
                        </label>
                    </div>
                    <button className={s.btn_order}>
                        рассчитать стоимость
                    </button>
                </div>
            </form>
        </div>
    );
};
