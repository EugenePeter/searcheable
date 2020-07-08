import { call, all } from "redux-saga/effects";

import { searchFieldSaga } from "./search/search.saga";

export default function* rootSaga() {
  yield all([call(searchFieldSaga)]);
}
