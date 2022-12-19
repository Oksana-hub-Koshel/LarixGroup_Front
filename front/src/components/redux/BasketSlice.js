import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dataBasket: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.dataBasket.push(action.payload);
        },
        removeItemIncart: (state, action) => {
            state.dataBasket = state.dataBasket.filter(
                data => data.id !== action.payload,
            );
        },
        removeAll: (state, action) => {
            state.dataBasket = action.payload;
        },
    },
});

export const {addToBasket, removeItemIncart, removeAll} = basketSlice.actions;
export default basketSlice.reducer;
