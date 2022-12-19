import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    orderData: [],
    count: [],
    customerData: {
        name: '',
        tel: null,
        email: '',
    },
};

const ordersSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orderData.push(action.payload);
        },
        addCustomerData: (state, action) => {
            state.customerData = action.payload;
        },
        addCount: (state, action) => {
            state.count.push(action.payload);
        },
    },
});

export const {addOrder, addCustomerData, addCount} = ordersSlice.actions;
export default ordersSlice.reducer;
