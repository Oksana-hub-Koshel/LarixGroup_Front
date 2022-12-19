import s from './Garanty.module.css';

export const Garanty = () => {
    return (
        <div className={s.container}>
            <div className={s.left_block}>2</div>
            <div className={s.center_block}>
                <h2>Гарантия</h2>
                <p className={s.center_block_text1}>2 года</p>
                <p className={s.center_block_text2}>
                    На наши малые архитектурные
                    <br />
                    формы мы предоставляем
                    <br />
                    гарантию 2 года
                </p>
            </div>
            <div className={s.right_block}>2</div>
        </div>
    );
};
