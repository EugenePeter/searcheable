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
        isFetching: false,
      };

    case SearchActionTypes.SEARCH_IS_FETCHING:
      return {
        ...state,
        isFetching: true,
        defaultImage: "",
      };

    case SearchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,

        defaultImage: action.payload,
        isFetching: false,
      };
    case ImageTypes.FETCH_IMAGE_FAILURE:
      return {
        ...state,
        error: action.value,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default defaultImageReducer;
