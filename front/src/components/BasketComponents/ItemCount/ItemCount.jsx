import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addCount} from '../../redux/OrdersSlice';

const ItemCount = ({item}) => {
    const [value, setValue] = useState();
    //const count = useSelector((state) => state.order.count);
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(addCount(e.target.value));
        setValue(e.target.value);
    };

    return (
        <>
            <td data-label="Количество">
                <input
                    type="text"
                    value={value}
                    //onChange={(e) => dispatch(addCount(e.target.value))}
                    onChange={e => onChange(e)}
                    defaultValue={Number(1)}
                />
            </td>
            <td data-label="Сумма">
                {Number(value) > 0
                    ? Number(value) * Number(item.price)
                    : item.price}{' '}
                руб.
            </td>
        </>
    );
};

export default ItemCount;
