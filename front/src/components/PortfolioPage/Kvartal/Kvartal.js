import s from './Kvartal.module.css';

export const Kvartal = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.high_block}>
                <div className={s.high_block_descrip}>
                    <p className={s.title1}>Испанские кварталы</p>
                    <p className={s.title2}>
                        Выполнение работ по озеленению территории
                    </p>
                    <div className={s.abzac_block}>
                        <p>вертикальная планировка,</p>
                        <p>подготовка почвы под посадки и посевы,</p>
                        <p>вспашка на тех участках, где нет насаждений,</p>
                        <p>рыхление среди существующих насаждений,</p>
                        <p>внесение органических и минеральных удобрений,</p>
                        <p>
                            разбивка территории в натуре в соответствии с
                            проектом мест под посадку деревьев из Европы,
                        </p>
                        <p>кустарников, цветов, посев газонных трав.</p>
                    </div>
                </div>
                <div className={s.high_block_img}>
                    <img src={'./Data/content_р3-2.jpeg'} />
                </div>
            </div>

            <div className={s.low_block}>
                <div className={s.low_block_left}>
                    <div className={s.low_block_left_block1}>
                        <div className={s.low_block_image}>
                            <img src={'./Data/content_333.jpeg'} />
                        </div>
                        <div className={s.low_block_image}>
                            <img src={'./Data/content_555.jpeg'} />
                        </div>
                    </div>
                    <div className={s.low_block_left_block2}>
                        <img src={'./Data/content_777.jpeg'} />
                    </div>
                </div>

                <div className={s.low_block_right}>
                    <img src={'./Data/content_32.jpeg'} />
                </div>
            </div>
        </div>
    );
};
