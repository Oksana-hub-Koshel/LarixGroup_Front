import s from './Landscape.module.css';

export const Landscape = () => {
    return (
        <div className={s.container}>
            <div className={s.block_left}>
                <h2 className={s.title1}>Ландшафтный проект</h2>
                <p className={s.title2}>Проект концепции</p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <span>Эскиз генплана</span>
                    </li>
                    <li className={s.item}>
                        <span>
                            План благоустройства с указанием основных
                            вертикальных отметок (Генплан)
                        </span>
                    </li>
                    <li className={s.item}>
                        <span>Альбом стилистических решений</span>
                    </li>
                    <li className={s.item}>
                        <span>Разбивочный чертеж</span>
                    </li>
                    <li className={s.item}>
                        <span>Привязка построек и сооружений</span>
                    </li>
                    <li className={s.item}>
                        <span>3D Модель участка</span>
                    </li>
                </ul>
            </div>
            <div className={s.block_right}>
                <h2>Рабочий проект</h2>

                <ul className={s.list}>
                    <li className={s.item}>
                        <span>Схема вертикальной планировки</span>
                    </li>
                    <li className={s.item}>
                        <span>
                            Разрезы по видам мощения, узлы подпорных стен, узлы
                            <br /> сопряжения
                        </span>
                    </li>
                    <li className={s.item}>
                        <span>План покрытий</span>
                    </li>
                    <li className={s.item}>
                        <span>Схема дренажной и ливневой систем</span>
                    </li>
                    <li className={s.item}>
                        <span>Схема освещения</span>
                    </li>
                    <li className={s.item}>
                        <span>Подбор светильников</span>
                    </li>
                    <li className={s.item}>
                        <span>Расчет освещенности</span>
                    </li>
                    <li className={s.item}>
                        <span>Дендроплан</span>
                    </li>
                    <li className={s.item}>
                        <span>Посадочная ведомость</span>
                    </li>
                    <li className={s.item}>
                        <span>Сводный план коммуникаций</span>
                    </li>
                    <li className={s.item}>
                        <span>План системы автополива</span>
                    </li>
                    <li className={s.item}>
                        <span>Чертежи по малым архитектурным формам</span>
                    </li>
                    <li className={s.item}>
                        <span>
                            Калькуляция стоимости с объемами и типами
                            <br /> материалов
                        </span>
                    </li>
                </ul>
            </div>
            <div className={s.block_image}>
                <img src="./Data/content_plan.png" />
            </div>
        </div>
    );
};
