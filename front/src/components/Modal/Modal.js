import './Modal.css';
import {Icon} from '@iconify/react';
import {useForm} from 'react-hook-form';
import React, {useState} from 'react';
import axios from 'axios';

export const Modal = ({active, setActive}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(!isDisabled);
    };

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({mode: 'onBlur'});

    const handleData = e => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/appeals/create/call',
            headers: {},
            data: {
                username: e.username,
                telephone: e.telephone,
            },
        }).then(() => {
            setActive(false);
        });
    };

    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className={active ? 'modal_content active' : 'modal_content'}
                onClick={e => e.stopPropagation()}>
                <div className="cross_block">
                    <Icon
                        icon="akar-icons:cross"
                        vFlip={true}
                        onClick={() => setActive(false)}
                        className="cross"
                    />
                </div>
                <div className="content_window">
                    <h1 className="text_modal">
                        Заказать <span>звонок</span>
                    </h1>
                    <form className="form" onSubmit={handleSubmit(handleData)}>
                        <div className="inp_input">
                            <input
                                placeholder="Ваше имя"
                                className="inp_field"
                                {...register('username', {
                                    required: 'Поле обязательно к заполнению',
                                })}
                            />
                            {/*<p className="error">{errors?.username?.message}</p>*/}
                            <input
                                placeholder="Ваш телефон"
                                className="inp_field"
                                {...register('telephone', {
                                    required: 'Поле обязательно к заполнению',
                                })}
                            />
                            {/*<p className="error">{errors?.telephone?.message}</p>*/}
                        </div>
                        <div className="conditions">
                            <input
                                type="checkbox"
                                {...register('agree', {required: true})}
                                disabled={isDisabled}
                            />
                            <p>
                                Я согласен с <span>условиями</span>
                            </p>
                        </div>
                        <button
                            className="send"
                            type="submit"
                            onClick={handleClick}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
