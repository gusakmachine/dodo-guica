import {call, put, takeEvery} from "redux-saga/effects"
import {add, GET} from "../reducers/pizzasReducer";
import * as PizzasService from "../../api/PizzasService";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchPizzasWorker({payload}) {
    //yield delay(500);
    const data = yield call(PizzasService.get, payload.start, payload.end);
    yield put(add(data));
}

export function* pizzasWatcher() {
    yield takeEvery(GET, fetchPizzasWorker)
}