import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        set: (state, {payload}) => {
            if (!payload && !payload.id)
                return state;

            state[payload.id] = payload;
        },
        unset: (state, action) => {
            const {payload} = action;

            if (!payload || !payload.id)
                return  {};
            else
                delete state[payload.id];

            return state;
        },
    },
});

export const { set, unset } = cart.actions;

export default cart.reducer;