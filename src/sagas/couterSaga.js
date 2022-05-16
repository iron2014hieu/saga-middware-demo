import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../redux/actions";

export default function counterSaga() {
  return [watcherIncrease()];
}
export function* watcherIncrease() {
  while (true) {
    console.log("wathcer");
    yield takeEvery(types.INCREASE, increase);
  }
}
function* increase(action) {
  console.log("increase");
  yield put({ type: types.INCREASE_SUCCESS });
}
