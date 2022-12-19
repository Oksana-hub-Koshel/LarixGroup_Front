import s from './PageErrror.module.css';

export const NoPage = () => {
    return (
        <div className="container">
            <div className={s.container}>
                <div>
                    <img src={'./Data/404.png'} />
                </div>
            </div>
        </div>
    );
};
