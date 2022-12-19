import s from './Experience.module.css';

export const Experience = () => {
    return (
        <div className="container">
            <div className={s.section}>
                {/*<img src="./Data/content_truck.png" className={s.truck_img}/>*/}
                {/*<img src="./Data/content_flowerpot.png" className={s.flower_img}/>*/}
                <h2 className={s.title}>
                    Мы занимаемся озеленением много лет и накопили большой опыт
                </h2>
                <p className={s.text}>
                    С еами вы можете быть уверенными - все будет сделано как
                    надо
                </p>

                <p className={s.text_left}>
                    Зная все тонкости работы, мы поможем вам сэкономить без
                    потери качества. Сад будет радовать вас долгие годы
                </p>
                <p className={s.text_left}>
                    Озеленение начинается с визуализации — эскизов и ЗD-модели.
                    Когда дизайн утверждён, мы приступаем к разработке проекта и
                    составляем:
                </p>

                <div className={s.items}>
                    <div className={s.item}>
                        <h2 className={s.title_item}>Дендрологический план</h2>
                        <p className={s.title_descrip}>
                            На нём указана подробная схема расположения всех
                            посадок
                        </p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title_item}>Посадочный чертёж</h2>
                        <p className={s.title_descrip}>
                            Рабочий инструмент для озеленителей
                        </p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title_item}>
                            План цветочного оформления
                        </h2>
                        <p className={s.title_descrip}>
                            Уточняет состав цветочных композиций
                        </p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title_item}>
                            Ассортиментная ведомость
                        </h2>
                        <p className={s.title_descrip}>
                            Таблица с перечислением всех растений
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
