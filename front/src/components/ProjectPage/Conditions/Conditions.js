import s from './Conditions.module.css';

export const Conditions = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Как мы работаем</h2>
            <div className={s.list_items}>
                <div className={s.item}>
                    <p className={s.num}>
                        <span>01 - </span>06
                    </p>
                    <p className={s.text_center}>Выезжаем на место</p>
                    <p className={s.text_right}>
                        Собираем все данные и составляем техническое задание,
                        заключаем договор
                    </p>
                </div>
                <div className={s.item}>
                    <p className={s.num}>
                        <span>02 -</span> 06
                    </p>
                    <p className={s.text_center}>Концепция</p>
                    <p className={s.text_right}>
                        Подбираем и утверждаем концепцию
                    </p>
                </div>
                <div className={s.item}>
                    <p className={s.num}>
                        <span>03 -</span> 06
                    </p>
                    <p className={s.text_center}>
                        Создаем подробные планы работ
                    </p>
                    <p className={s.text_right}>
                        Дизайн всех элементов, генплан и вертикальную
                        планировку, план озеленения, карту тропинок и дорожек,
                        системы полива и дренажа, схему освещения —
                        индивидуально для вашего объекта с учётом его
                        особенностей. Подбираем растения и малые архитектурные
                        формы
                    </p>
                </div>
                <div className={s.item}>
                    <p className={s.num}>
                        <span>04 - </span>06
                    </p>
                    <p className={s.text_center}>Утверждение</p>
                    <p className={s.text_right}>
                        Утверждаем объем работ и смету
                    </p>
                </div>
                <div className={s.item}>
                    <p className={s.num}>
                        <span>05 -</span> 06
                    </p>
                    <p className={s.text_center}>
                        Приступаем к работам согласно плана
                    </p>
                    <p className={s.text_right}>
                        Ежедневно контролируем выполнение работ. Регулярно
                        представляем исполнительную документацию и акты
                        выполненных работ
                    </p>
                </div>
                <div className={s.item_green}>
                    <img src="./Data/content_tick.png" />
                    <p className={s.green_text}>Вы принимаете готовую работу</p>
                </div>
            </div>
        </div>
    );
};
