import { createSelector } from "reselect";

const selectImage = (state) => state.defaultImages;

export const selectDefaultImage = createSelector(
  [selectImage],
  (image) => image.defaultImage
);

export const fetchImage = createSelector([selectImage], (image) => image.isFetching);
