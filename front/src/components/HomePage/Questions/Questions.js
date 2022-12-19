import s from './Questions.module.css';
import {Link} from 'react-router-dom';
import {Privacy} from '../../Pivacy/Privacy';
import {useForm} from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import InputElement from 'react-input-mask';

export const Questions = () => {
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
            // console.log(response);
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
        <div className={s.questions_wrapper}>
            <div className={s.questions}>
                <div className={s.header}>
                    <div className={s.question_title}>
                        <h2>Есть вопросы?</h2>
                        Ваши вопросы — наши решения
                    </div>
                    <div className={s.question_items}>
                        <div>Как сэкономить без потери качества?</div>
                        <div>Какой стиль оформления сейчас в моде?</div>
                        <div>Как учесть все особенности местности?</div>
                        <div>Как правильно решить мою задачу?</div>
                        <div>С чего начать?</div>
                        <div>
                            Насколько сложно и дорого будет обслуживать готовый
                            объект?
                        </div>
                        <div>Какой стиль оформления сейчас в моде?</div>
                    </div>
                </div>
                <form
                    autoComplete="off"
                    className={s.forma_wrapper}
                    onSubmit={handleSubmit(handleData)}>
                    <div className={s.order_inputs_high}>
                        <div>
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
                        <div>
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
                            <div className="error">
                                {errors?.email?.message}
                            </div>
                        </div>
                    </div>
                    <div className={s.order_inputs_low}>
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
                            <div className="error">
                                {errors?.comment?.message}
                            </div>
                        </div>
                        <div className={s.order_check}>
                            <input type="checkbox" className={s.check} />
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
                            className={s.btn_call}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
