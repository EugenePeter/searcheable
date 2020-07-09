import ImageTypes from "./images.types";
import SearchActionTypes from "../search/search.types";

const INITIAL_STATE = {
  defaultImage: [],
  error: null,
  isFetching: true,
};

const defaultImageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImageTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        defaultImage: state.defaultImage.concat(action.value),
        isFetching: !state.isFetching,
      };

    case SearchActionTypes.SEARCH_IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    case SearchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        defaultImage: action.payload,
        isFetching: !state.isFetching,
      };
    case ImageTypes.FETCH_IMAGE_FAILURE:
      return {
        ...state,
        error: action.value,
      };
    default:
      return state;
  }
};

export default defaultImageReducer;
