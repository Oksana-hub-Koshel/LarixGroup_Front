import s from './Manifacture.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const Manifucture = () => {
    const [item, setItem] = useState([]);
    console.log(item.file);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/info/presentation/')
            .then(response => setItem(response.data));
    }, []);

    return (
        <>
            <div className={s.container}>
                <div className={s.line}></div>

                <div className={s.wrapper}>
                    <div className={s.content_left}>
                        <p className={s.content_left_text}>
                            устроено <span>разумно</span> - устроено{' '}
                            <span>красиво</span>
                        </p>
                        <h1 className={s.content_left_slogan}>
                            Производство
                            <br />
                            малых <br />
                            архитектурных форм
                        </h1>
                        <p className={s.content_left_text2}>
                            Парковые, игровые, спортивные МАФ по вашему проекту
                            за 30 дней! Гарантия - 2 года!
                        </p>
                        <div className={s.wrapper_btn}>
                            <div className={s.btn_left}>
                                {/*<Link to={item.file}>Презентация</Link>*/}
                                <a
                                    href={item.file}
                                    rel="nofollow noreferrer"
                                    target="_blank">
                                    Презентация
                                </a>
                            </div>
                            <div className={s.btn_right}>
                                <a>Скачать каталог</a>
                            </div>
                        </div>
                    </div>
                    <div className={s.content_right}>
                        <div className={s.content_high}>
                            <img
                                src={'./Data/painting.png'}
                                className={s.img1}
                            />
                            <p className={s.text_design}>
                                Дизайн от{' '}
                                <span className={s.text}>европейских</span>{' '}
                                художников
                            </p>
                        </div>
                        <div className={s.content_low}>
                            <img
                                src={'./Data/painter2.png'}
                                className={s.img2}
                            />
                            <p className={s.text_design}>
                                Реализация от{' '}
                                <span className={s.text}>опытных</span>{' '}
                                строителей
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
