import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userAuthReducer } from "../Reducers/userAuthReducer/userAuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { bagReducer } from "../Reducers/bagReducer/bagReducer";
import { filterReducer } from "../Reducers/filterReducer/filterReducer";
import { cartReducer } from "../Reducers/cartReducer/cartReducer";

const rootReducers = combineReducers({
  auth: userAuthReducer,
  bag:bagReducer,
  filter:filterReducer,
  cart:cartReducer
});

var persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","bag","filter","cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistedStore = persistStore(store);
