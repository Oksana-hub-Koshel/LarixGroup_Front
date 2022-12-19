import s from './New.module.css';

import React, {useEffect, useState} from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const News = () => {
    const [articles, setArticles] = useState([]);

    const src = 'http://127.0.0.1:8000/products/';
    useEffect(() => {
        axios.get(src).then(data => {
            // console.log(data)
            // console.log(data.data.results)
            setArticles(data.data.results);
        });
    }, []);
    // console.log(articles)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className={s.title_block}>
                <h2 className={s.title}>Новинки в каталоге МАФ </h2>
            </div>

            <p className={s.hidden_text2}>Малые архитектурные формы</p>
            <p className={s.hidden_text}>Новинки в каталоге МАФ</p>

            <div className={s.carusel}>
                <Slider {...settings}>
                    {articles &&
                        articles.map(item => {
                            return (
                                <>
                                    <Link
                                        to={`/info/${item.id}`}
                                        state={{from: `${item.id}`}}>
                                        <div className={s.image}>
                                            <img src={item.image} />
                                        </div>
                                        <div>
                                            <h4 className={s.goods_name}>
                                                {item.name}
                                            </h4>
                                        </div>
                                    </Link>
                                </>
                            );
                        })}
                </Slider>
            </div>
            <div className={s.border_block}></div>
            <div className={s.link_catalog}>
                <a href="/catalog" className={s.btn_katalog}>
                    Перейти в каталог
                </a>
            </div>

            <div className={s.padding}></div>
        </>
    );
};

// export const News = () => {
//    const [articles, setArticles] = useState([]);

//    const src = "http://127.0.0.1:8000/products/";
//    useEffect(() => {
//       axios.get(src).then((data) => {
//          // console.log(data)
//          // console.log(data.data.results)
//          setArticles(data.data.results);
//       });
//    }, []);
//    // console.log(articles)
//    const settings = {
//       // dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//    };
//    return (
//       <>
//          <div className={s.title_block}>
//             <h2 className={s.title}>Новинки в каталоге МАФ </h2>
//          </div>
//          <p className={s.hidden_text2}>Малые архитектурные формы</p>
//          <p className={s.hidden_text}>Новинки в каталоге МАФ</p>
//          <div className={s.carusel}>
//             <Slider {...settings}>
//                {articles &&
//                   articles.map((item) => {
//                      return (
//                         <div key={item.id}>
//                            <div className={s.image}>
//                               <img src={item.image} />
//                            </div>
//                            <div>
//                               <h4 className={s.goods_name}>{item.name}</h4>
//                            </div>
//                         </div>
//                      );
//                   })}
//             </Slider>
//          </div>
//          <div className={s.border_block}></div>
//          <div className={s.link_catalog}>
//             <a href="/catalog" className={s.btn_katalog}>
//                Перейти в каталог
//             </a>
//          </div>

//          <div className={s.padding}></div>
//       </>
//    );
// };
