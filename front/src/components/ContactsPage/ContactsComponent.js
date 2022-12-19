import styles from './ContactsComponent.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Modal} from '../Modal/Modal';

export const Contacts = () => {
    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    console.log(data);
    const src = 'http://127.0.0.1:8000/info/contact/';
    useEffect(() => {
        axios.get(src).then(data => {
            setData(data.data);
        });
    }, []);

    return (
        <div className="container">
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>{data.name}</h1>
                    <p>
                        инн {data.inn} огрн{data.orgn}
                    </p>
                </div>
                <div className={styles.contacts_container}>
                    <div className={styles.left_side}>
                        <div className={styles.contacts_title}>{data.city}</div>
                        <div className={styles.number_block}>
                            <a href="tel:+7 (495) 7870039">{data.telephone}</a>
                        </div>
                        <div className={styles.contacts}>
                            <a
                                className={styles.order_call}
                                onClick={() => setModalActive(true)}>
                                Заказать звонок
                            </a>
                        </div>
                        <Modal
                            active={modalActive}
                            setActive={setModalActive}
                        />
                    </div>

                    <div className={styles.right_side}>
                        <p>
                            <scitypan>{data.adress}</scitypan>
                        </p>
                        <p>
                            <span className={styles.work_text}>
                                Мы работаем: &nbsp;
                            </span>
                            <span>{data.working_hours}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
