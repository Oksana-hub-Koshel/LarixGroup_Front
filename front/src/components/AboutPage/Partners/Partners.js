import s from './Partners.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';

export const Partners = () => {
    const [item, setItem] = useState([]);

    const src = 'http://127.0.0.1:8000/info/partners/';
    useEffect(() => {
        axios.get(src).then(data => {
            // console.log(data.data)
            setItem(data.data);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className={s.slider_wrapp}>
                <div className={s.slider_header}>
                    <h2>Нам доверяют</h2>
                </div>
                <Slider {...settings}>
                    {item.map(el => {
                        const value = Object.values(el);
                        return (
                            <>
                                <div className={s.slider_partners}>
                                    <div className={s.slider}>
                                        <div className={s.slider_block}>
                                            <img src={el.image} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>

            <div className={s.partners_block}>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={'./Data/woman1.jpeg'} />
                    </div>
                    <div className={s.title}>Ковтун Мария</div>
                    <div className={s.text_wrapp}>
                        <p>
                            Руководитель
                            <br /> компании с 2009г.
                        </p>
                        <p>
                            Ландшафтный <br />
                            дизайнер с 2007г.
                        </p>
                    </div>
                </div>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={'./Data/woman2.jpeg'} />
                    </div>
                    <div className={s.title}>Добжевич Евгения</div>
                    <div className={s.text}>
                        <p>Ландшафтный архитектор с 2009г.</p>
                    </div>
                </div>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={'./Data/man.jpeg'} />
                    </div>
                    <div className={s.title}>Стрелков Сергей</div>
                    <div className={s.text}>
                        <p>Ландшафтный архитектор с 2009г.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
