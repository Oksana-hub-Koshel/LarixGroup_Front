import React, {useState} from 'react';
import s from './СatalogLine.module.css';
import {Icon} from '@iconify/react';

export const CatalogLine = ({
    catList,
    valueSearch,
    setValueSearch,
    setSortParams,
}) => {
    const [open, setOpen] = useState(false);
    const [selectSortList, setSelectSortList] = useState(0);
    const sortList = ['Все', 'Парковые', 'Игровые', 'Спортивные'];

    const onChangeSelect = index => {
        setSelectSortList(index);
        if (sortList[index] === 'Все') {
            setSortParams(0);
        } else if (sortList[index] === 'Парковые') {
            setSortParams(1);
        } else if (sortList[index] === 'Игровые') {
            setSortParams(2);
        } else if (sortList[index] === 'Спортивные') {
            setSortParams(3);
        }
    };

    function OpenCatalog() {
        setOpen(true);
        console.log(open);
    }


    return (
        <div className={s.div_menu}>
            <div className={s.menu_line}>
                <h2>Каталог</h2>
                <Icon
                    icon="flat-color-icons:menu"
                    color="white"
                    vFlip={true}
                    onClick={OpenCatalog}
                    className={s.menu_img}
                />
            </div>
            <div>
                <menu className={s.menu}>
                    {catList && (
                        <input
                            type="search"
                            placeholder={'Поиск'}
                            value={valueSearch}
                            onChange={e => setValueSearch(e.target.value)}
                        />
                    )}
                    {sortList.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    selectSortList === index ? s.li_all : s.li
                                }
                                onClick={() => onChangeSelect(index)}>
                                {item}
                            </li>
                        );
                    })}
                </menu>
            </div>
        </div>
    );
};
