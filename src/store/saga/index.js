import {all} from "redux-saga/effects";
import {pizzasWatcher} from "./pizzasSaga";

export function* rootWatcher() {
    yield all([pizzasWatcher(),]);
}