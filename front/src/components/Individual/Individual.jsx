import styles from './Individual.module.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';

function IndividualPage() {
    const items = [1, 2, 3, 4, 5, 6];
    const [item, setItem] = useState([]);
    console.log(item.file);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/info/presentation/')
            .then(response => setItem(response.data));
    }, []);

    return (
        <div className="container">
            <div className={styles.about}>
                <h2 className={styles.title}>
                    <span>Малые</span> архитектурные формы (маф)
                </h2>
                <div className={styles.about_description}>
                    <div className={styles.about_block}>
                        <p className={styles.about_text}>
                            Компания "ЛАРИКС" – ваш надежный партнер в сфере
                            производства индивидуальных малых архитектурных
                            форм, парковой и городской мебели, изделий для
                            благоустройства парков и жилых дворов, детского
                            игрового и спортивного оборудования, осуществляющий
                            свою деятельность по всей территории всей России.
                            <span>Ознакомьтесь с нашей продукцией:</span>
                        </p>
                        <div className={styles.about_icons}>
                            <a className={styles.about_icon}>
                                <img
                                    src={'./img/content_signSlide.png'}
                                    alt=""
                                />
                                <p href="#">игровое оборудование</p>
                            </a>
                            <a className={styles.about_icon}>
                                <img
                                    src={'./img/content_signBasc.png'}
                                    alt=""
                                />
                                <p href="#">спортивное оборудование</p>
                            </a>
                            <a className={styles.about_icon}>
                                <img
                                    src={'./img/content_signPark.png'}
                                    alt=""
                                />
                                <p href="#">благоустройство</p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.about_block}>
                        <div className={styles.about_img}>
                            <img
                                src={'./img/content_maf-1.jpg'}
                                alt=""
                                className={styles.about_big_img}
                            />
                            <div className={styles.about_small_images}>
                                <img
                                    src={
                                        './img/maf2-e66d06a5e7588a0fab54b9736637f14389b644cdbfc3317008925cceb02ad3d9.jpg'
                                    }
                                    alt=""
                                    className={styles.about_small_img}
                                />
                                <img
                                    src={
                                        './img/maf3-9800b2ad891ef5d5f47914ceb7a81200dda33473fe5b8d14ee70a849fb84482d.jpg'
                                    }
                                    alt=""
                                    className={styles.about_small_img}
                                />
                                <img
                                    src={
                                        './img/maf4-87a1cad4d2fe6d42b20a464b7e0268d2432c99b0887e4566acc96999abee9370.jpg'
                                    }
                                    alt=""
                                    className={styles.about_small_img}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_buttons}>
                    <button className={styles.about_button}>
                        <a
                            className={styles.about_button}
                            href={item.file}
                            rel="nofollow noreferrer"
                            target="_blank">
                            презентация
                        </a>
                    </button>
                    <button className={styles.about_button}>
                        скачать каталог
                    </button>
                </div>
                <div className={styles.about_classification}>
                    <div className={styles.title}>
                        <h2 className={styles.title}>
                            <span>КЛАССИФИКАЦИЯ </span>
                            МАФ
                        </h2>
                    </div>
                    <div className={styles.about_classes}>
                        <div className={styles.about_class}>
                            <img
                                src={'./img/content_content_bench.png'}
                                alt=""
                                className={styles.about_class_img}
                            />
                            <p className={styles.about_class_title}>
                                УНИВЕРСАЛЬНЫЕ
                            </p>
                            <p className={styles.about_class_description}>
                                (для повсеместного ежедневного <br />
                                использования) — вазоны для <br />
                                цветов, фонари, скамейки, <br />
                                мусорные урны и пр.;
                            </p>
                        </div>
                        <div className={styles.about_class}>
                            <img
                                src={'./img/content_content_bust.png'}
                                alt=""
                                className={styles.about_class_img}
                            />
                            <p className={styles.about_class_title}>
                                ДЕКОРАТИВНЫЕ
                            </p>
                            <p className={styles.about_class_description}>
                                (для украшения среды) — статуи и скульптуры{' '}
                                <br /> разных форм, фонтаны, беседки, мозаичные{' '}
                                <br /> основания бассейна, мостики и
                                искусственные ручьи;
                            </p>
                        </div>
                        <div className={styles.about_class}>
                            <img
                                src={'./img/content_content_sandbox.png'}
                                alt=""
                                className={styles.about_class_img}
                            />
                            <p className={styles.about_class_title}>
                                ДОСУГОВЫЕ
                            </p>
                            <p className={styles.about_class_description}>
                                (для детских и спортивных игр) —<br />{' '}
                                песочницы, качели, горки,
                                <br /> шведская стенка.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                <h2 className={styles.title}>
                    <span>Виды</span> маф
                </h2>

                <div className={styles.item_right}>
                    <div className={styles.item_description}>
                        <h3 className={styles.item_title}>
                            скамейки, лавки, урны
                        </h3>
                        <p className={styles.item_text}>
                            Самый распространённый пример садовой мебели —
                            скамейки. Но такая лавка нужна не только, чтобы
                            сидеть на ней, но и в декоративных целях.
                            <br />
                            <br />
                            Скамейка является ключевым узлом участка — возле
                            скамейки сходятся многие дорожки, к ней могут вести
                            лестницы или мостик. Скамейки размещают в беседке
                            или возле дома.
                            <br />
                            <br />
                            Делают их из разнообразных материалов: дерева,
                            металла и камня. Встречаются и разноцветные скамейки
                            из пластика.
                        </p>
                    </div>

                    <div className={styles.item_img}>
                        <img src={'./Data/branch.jpeg'} alt="" />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item_description}>
                        <h3 className={styles.item_title}>вазоны</h3>
                        <p className={styles.item_text}>
                            Цветочные вазоны или цветочные клумбы - прекрасный
                            способ подчеркнуть красоту и уникальность вашего
                            сада в течение всего сезона. Декоративные вазоны из
                            бетона отлично подходят для небольших садов, где
                            особенно важно оптимально использовать каждый
                            кусочек территории. Вазоны для цветов из бетона с
                            красивым рельефным орнаментом используют и в
                            качестве украшений входных групп, и как навершия на
                            столбах и тумбах, и как цветники на участке. Вазоны
                            бывают простой и сложной формы, стационарные и
                            переносные. Изготавливаются из различных материалов.
                            Правильно подобранные вазоны для цветов станут
                            интересным элементом ландшафтного дизайна подчеркнут
                            красоту и особенности большинства садовых растений.z
                        </p>
                    </div>

                    <div className={styles.item_img}>
                        <img src={'./Data/branch2.jpeg'} alt="" />
                    </div>
                </div>

                <div className={styles.item_right}>
                    <div className={styles.item_description}>
                        <h3 className={styles.item_title}>
                            беседки, павильйоны
                        </h3>
                        <p className={styles.item_text}>
                            Беседки нужны, чтобы можно было укрыться в саду от
                            непогоды. Крыша такого импровизированного домика
                            укрывает от дождя и снега, а стенки предохраняют от
                            порывов ветра. При этом вы находитесь на свежем
                            воздухе, вдыхаете ароматы произрастающих вокруг
                            растений и слышите пение птиц.
                        </p>
                    </div>

                    <div className={styles.item_img}>
                        <img src={'./Data/branch3.jpeg'} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.item_description}>
                    <h3 className={styles.item_title}>перголы, навесы</h3>
                    <p className={styles.item_text}>
                        Изначально перголы использовались для поддержки
                        виноградных лоз и облегчения процесса сбора урожая еще в
                        Древнем Риме. Позже деревянные перголы стали чем-то
                        вроде навесов. Да, собственно, в переводе слово
                        «pergula» как раз-таки означает «навес» или
                        «пристройка».
                        <br />
                        <br />В любом случае, пергола – это сборная конструкция
                        из вертикальных опор в виде балок, арок, столбов и
                        примыкающих к ним горизонтальных элементов. Обычно
                        перголы увиты растениями, что придает конструкции еще
                        большую привлекательность.
                    </p>
                </div>

                <div className={styles.item_img}>
                    <img src={'./Data/branch5.jpeg'} alt="" />
                </div>
            </div>

            <div className={styles.item_right}>
                <div className={styles.item_description}>
                    <h3 className={styles.item_title}>
                        габионы, подпорные стенки
                    </h3>
                    <p className={styles.item_text}>
                        В настоящее время габионы находят широкое применение в
                        ландшафтном дизайне как по своему прямому назначению,
                        так и в качестве декоративных элементов — малых
                        архитектурных форм — например, при обустройстве террас
                        на участке.
                    </p>
                </div>
                <div className={styles.item_img}>
                    <img src={'./Data/branch6.jpeg'} alt="" />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.item_description}>
                    <h3 className={styles.item_title}>ЛОГОТИПЫ</h3>
                    <p className={styles.item_text}>
                        Логотип — важнейший элемент имиджа компании. Он служит,
                        в первую очередь, для идентификации компании на рынке.
                    </p>
                </div>
                <div className={styles.item_img}>
                    <img src={'./Data/branch7.jpeg'} alt="" />
                </div>
            </div>

            <div className={styles.item_right}>
                <div className={styles.item_description}>
                    <h3 className={styles.item_title}>фонтаны</h3>
                    <p className={styles.item_text}>
                        Особой гордостью любого хозяина участка станет
                        собственный фонтан. Его можно соорудить посередине уже
                        запланированного пруда, а можно продумать отдельное
                        водоотведение ещё при создании дизайн-проекта. Тогда
                        водопад получится автономным водоёмом. Ложе фонтана,
                        организованного в пруду, делается из гибкого
                        водопроницаемого материала, типа плёнки из каучука.
                        Отдельно стоящий водопад может быть выполнен из камня с
                        гидроизоляцией из бетона.
                    </p>
                </div>
                <div className={styles.item_img}>
                    <img src={'./Data/branch8.jpeg'} alt="" />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.item_description}>
                    <h3 className={styles.item_title}>индивидуальные маф</h3>
                    <p className={styles.item_text}>
                        Мы производим уникальные малые архитектурные формы для
                        улицы. Также, мы производим МАФ по индивидуальным
                        проектам заказчика. Мы можем изготовить практически
                        любые МАФ, любого цвета, размера и формы.
                    </p>
                </div>
                <div className={styles.item_img}>
                    <img src={'./Data/branch9.jpeg'} alt="" />
                </div>
            </div>
        </div>
    );
}

export default IndividualPage;
