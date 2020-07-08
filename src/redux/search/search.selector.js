import { createSelector } from "reselect";

const selectField = (state) => state.search;

export const selectFieldData = createSelector(
  [selectField],
  (value) => value.searchField
);
