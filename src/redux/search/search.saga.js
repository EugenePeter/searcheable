import {
  put,
  call,
  takeLatest,
  all,
} from "redux-saga/effects";

import {
  apiRoot,
  accessKeys,
} from "../../api/search-image";
import Axios from "axios";

import {
  SearchActionStart,
  SearchActionSuccess,
  SearchActionFailure,
} from "./search.actions";

import SearchActionTypes from "./search.types";

function* fetchFieldAsync({ value }) {
  const ourRequest = Axios.CancelToken.source();
  try {
    const response = yield Axios.get(
      `${apiRoot}/search/photos?page=2&query=${value}&client_id=${accessKeys}`,
      { cancelToken: ourRequest.token }
    );
    const data = yield response.data;
    console.log(value);
    console.log(data);
    // return data;
    // yield put(SearchActionSuccess(value));
  } catch (e) {
    // yield put(SearchActionFailure(e));
    yield console.log(e);
  }
}

export function* fetchFieldStart() {
  yield takeLatest(
    SearchActionTypes.SEARCH_START,
    fetchFieldAsync
  );
}

export const searchFieldSaga = function* () {
  yield all([call(fetchFieldStart)]);
};

// function* fetchFieldAsync({ value }) {
//   try {
//     // const images = yield call(SearchImage, value);
//     console.log(value);

//     // yield put(SearchActionSuccess(value));
//   } catch (e) {
//     //yield put(SearchActionFailure(e));
//     yield console.log(e);
//   }
// }

// export function* fetchFieldStart() {
//   yield takeLatest("SEARCH_START", fetchFieldAsync);
// }

// export const searchFieldSaga = function* () {
//   yield all([call(fetchFieldStart)]);
// };
