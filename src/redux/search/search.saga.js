import { put, call, takeLatest, all, debounce } from "redux-saga/effects";

import { apiRoot, accessKeys } from "../../api/search-image";
import Axios from "axios";

import {
  SearchActionSuccess,
  fetchImageActionStart,
  SearchActionFailure,
} from "./search.actions";

import SearchActionTypes from "./search.types";

function* fetchFieldAsync({ value }) {
  const ourRequest = Axios.CancelToken.source();
  const TrimmedValue = value.trim();
  try {
    const response = yield Axios.get(
      `${apiRoot}/search/photos?page=1&query=${TrimmedValue}&client_id=${accessKeys}&count=60`,
      { cancelToken: ourRequest.token }
    );
    const data = yield response.data.results;
    console.log(value);
    console.log(data);
    // return data;
    yield put(fetchImageActionStart());

    yield put(SearchActionSuccess(data));
  } catch (e) {
    yield put(SearchActionFailure(e));
    yield console.log(e);
  }
}

export function* debounceFetch() {
  yield debounce(1000, SearchActionTypes.SEARCH_START, fetchFieldAsync);
}

export function* fetchFieldStart() {
  yield takeLatest(SearchActionTypes.SEARCH_START, debounceFetch);
}

export const searchFieldSaga = function* () {
  yield all([call(debounceFetch)]);
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
