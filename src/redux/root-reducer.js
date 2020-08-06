import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cartReducer from "./cart/cart-reducer";
import shopReducer from "./shop/shop-reducer";
import directoryReducer from "./directory/directory-reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
