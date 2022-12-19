import s from './OrderForm.module.css';
import {Link} from 'react-router-dom';
import {Privacy} from '../../Pivacy/Privacy';
import {useForm} from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import InputElement from 'react-input-mask';

export const OrderForm = () => {
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
        <div className={s.container}>
            <div className={s.wrapp}>
                <h2> Закажите благоустройство </h2>
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
                            <div className="error">
                                {errors?.username?.message}
                            </div>
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
                            <div className="error">
                                {errors?.email?.message}
                            </div>
                        </div>
                    </div>
                    <div className={s.order_input_low}>
                        <div className={s.order_inp}>
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
                        <div className={s.order_inp}>
                            <label className="label">Комментарии</label>
                            <textarea
                                className={s.input_field}
                                {...register('comment', {
                                    required: 'Поле обязательно к заполнению',
                                })}
                            />
                            <div className="error">
                                {errors?.comment?.message}
                            </div>
                        </div>
                        <div className={s.btn_check}>
                            <div className={s.order_checkbox}>
                                <input
                                    type="checkbox"
                                    className={s.order_check}
                                />
                                <label className={s.label_check}>
                                    Я согласен{' '}
                                    <Link to="/privacy" component={<Privacy />}>
                                        <span>с условиями</span>
                                    </Link>
                                </label>
                            </div>

                            <input
                                type="submit"
                                value="связаться"
                                className={s.btn_order}
                                placeholder="связаться"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
