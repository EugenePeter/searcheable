//ACTIONS

import SearchActionTypes from "./search.types";

export const SearchActionStart = (value) => ({
  type: SearchActionTypes.SEARCH_START,
  value,
});

export const fetchImageActionStart = () => ({
  type: SearchActionTypes.SEARCH_IS_FETCHING,
});

export const SearchActionSuccess = (items) => ({
  type: SearchActionTypes.SEARCH_SUCCESS,
  payload: items,
});

export const SearchActionFailure = (e) => ({
  type: SearchActionTypes.SEARCH_FAILURE,
  payload: e,
});
