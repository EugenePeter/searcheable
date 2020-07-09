import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchReducer from "./search/search.reducer";
import defaultImageReducer from "./default-images/images.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  search: searchReducer,
  defaultImages: defaultImageReducer,
});

export default persistReducer(persistConfig, rootReducer);
