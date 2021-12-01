import {createSlice} from "@reduxjs/toolkit";

export const NAME = 'pizzas';
export const GET = NAME + '/get';

const pizzas = createSlice({
    name: NAME,
    initialState: null,
    reducers: {
        add: (state, {payload}) => {
            if (payload)
                return {
                    ...state,
                    ...payload
                };
            return state;
        },
    },
});

export const { add } = pizzas.actions;
export const get = (start, end) => {
    return {
        type: GET,
        payload: {
            start,
            end
        }
    };
};
export default pizzas.reducer;