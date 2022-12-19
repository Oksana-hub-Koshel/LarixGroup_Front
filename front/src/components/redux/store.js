import {configureStore} from '@reduxjs/toolkit';
import BasketSlice from './BasketSlice';
import OrdersSlice from './OrdersSlice';

export const store = configureStore({
    reducer: {
        basket: BasketSlice,
        order: OrdersSlice,
    },
});
