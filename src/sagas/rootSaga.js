import { all } from "redux-saga/effects";
import counterSaga from "./couterSaga";
export default function* rootSaga() {
//   yield all([call(counterSaga)]);
yield all([counterSaga()])
}
