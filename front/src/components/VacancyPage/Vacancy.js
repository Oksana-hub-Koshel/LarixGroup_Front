import s from './Vacancy.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const Vacancy = () => {
    const [active, setActive] = useState({open: 0});
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);

    const handleClick = index => {
        setActive({open: index});
        setVisible(!visible);
    };

    const src = 'http://127.0.0.1:8000/info/jobs/';
    useEffect(() => {
        axios.get(src).then(data => {
            setData(data.data);
        });
    }, []);

    return (
        <div className="container">
            <div className={s.title}>
                <h1>вакансии</h1>
            </div>

            <div className={s.text}>
                <p className={s.text_high}>
                    Компания ООО «Ларикс» занимается промышленным ландшафтным
                    строительством с 2013 года. Среди наших клиентов крупные
                    градостроительные компании, международные корпорации. С
                    каждым годом наши проекты всё масштабней и амбициозней. Так
                    уже сложилось, что во круг компании мы объединяем лучших
                    профессионалов в своей области. Если Вы считаете себя лучшим
                    в своём профиле, то мы будем рады познакомиться с Вами.
                    Отправляйте резюме на адрес электронной почты:
                    <a href="malto:kmv@larixgroup.ru"> kmv@larixgroup.ru </a>
                </p>
                <p className={s.text_low}>
                    На данный момент в компании открыты следующие вакансии:
                </p>

                <div className={s.list}>
                    <div className={s.list_item}>
                        <div className={s.vacancy}>
                            {data.map((item, index) => {
                                return (
                                    <>
                                        <div className={s.row}>
                                            <p className={s.num}>{item.id}.</p>
                                            <a
                                                className={s.title_2}
                                                onClick={() =>
                                                    handleClick(index)
                                                }>
                                                {item.title}
                                            </a>
                                        </div>
                                        {active.open === index && visible ? (
                                            <div className="active">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.content,
                                                    }}></p>
                                                <div className={s.links}>
                                                    <a className={s.link}>
                                                        {' '}
                                                        РАСПЕЧАТАТЬ
                                                    </a>
                                                    <a className={s.link}>
                                                        {' '}
                                                        СКАЧАТЬ В PDF
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
