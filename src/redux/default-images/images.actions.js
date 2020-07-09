import ImageTypes from "./images.types";

export const fetchImageActionStart = (value) => ({
  type: ImageTypes.FETCH_IMAGE_START,
  value,
});

export const imageIsfetching = (value) => ({
  type: ImageTypes.IMAGE_IS_FETCHING,
  value,
});

export const fetchImageActionSuccess = (value) => ({
  type: ImageTypes.FETCH_IMAGE_SUCCESS,
  value,
});

export const fetchImageActionFailure = (value) => ({
  type: ImageTypes.FETCH_IMAGE_FAILURE,
  value,
});
