import { call, all } from "redux-saga/effects";

import { searchFieldSaga } from "./search/search.saga";
import { defaultImageSaga } from "./default-images/images.saga";

export default function* rootSaga() {
  yield all([
    call(searchFieldSaga),
    call(defaultImageSaga),
  ]);
}
