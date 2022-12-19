import s from './Sertificate.module.css';

export const Sertificate = () => {
    return (
        <>
            <div className={s.sertificate_wrapper}>
                <div className={s.sertificate}>
                    <img
                        src={'./Data/sertificate.png'}
                        className={s.sertificate_image}
                    />
                </div>
                <div className={s.sertificate_info}>
                    <p className={s.info_num}>500 000 000 ₽</p>
                    <p className={s.info_text}>
                        В декабре 2016 года мы получили СРО сертификат на 500
                        <br /> млн рублей в области строительства
                    </p>
                </div>
            </div>
            <div className={s.wrapper_technology}>
                <div className={s.tech_left}>
                    <p>
                        Мы готовы воплотить в жизнь
                        <br /> самые смелые желания в <br />
                        области ландшафтного
                        <br /> строительства
                    </p>
                </div>
                <div className={s.tech_center}>
                    <p>
                        Постоянное обучение новым технологиям и следование
                        <br /> мировым трендам позволяют нам занимать лидирующие
                        <br /> позиции на рынке ландшафтного стрроительства
                    </p>
                    <p>
                        К нам обращаются владельцы загородных коттеджей,
                        <br /> собственники крупных торговых центров, владельцы{' '}
                        <br />
                        градообразующих компаний Москвы
                    </p>
                    <img src={'./Data/people.png'} />
                </div>
                <div className={s.tech_right}>
                    <p>
                        На нашем производстве мы можем <br />
                        изготовить практически любые
                        <br /> малые архитектурные формы. Мы в<br /> точности
                        реализуем техзадание
                        <br /> заказчика, а так же всегда готовы
                        <br /> создать что-то новое
                    </p>
                </div>
            </div>
        </>
    );
};
