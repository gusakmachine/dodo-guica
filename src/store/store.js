import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./reducers/cartReducer";
import pizzasReducer from "./reducers/pizzasReducer";
import {rootWatcher} from "./saga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        cart: cartReducer,
        pizzas: pizzasReducer,
    },
    middleware: [
        sagaMiddleware
    ]
});

sagaMiddleware.run(rootWatcher);