import { put, call, all, takeLatest } from "redux-saga/effects";

import { fetchData } from "../../api/unsplash-api";

import { fetchImageActionSuccess, fetchImageActionFailure } from "./images.actions";

import ImageTypes from "./images.types";

function* fetchDefaultImageAsync() {
  try {
    const defaultImage = yield call(fetchData);
    yield put(fetchImageActionSuccess(defaultImage));
    console.log(defaultImage);
  } catch (e) {
    yield put(fetchImageActionFailure(e));
  }
}

export function* fetchDefaultImageStart() {
  yield takeLatest(ImageTypes.FETCH_IMAGE_START, fetchDefaultImageAsync);
}

export const defaultImageSaga = function* () {
  yield all([call(fetchDefaultImageStart)]);
};
