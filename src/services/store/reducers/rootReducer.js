import appReducer from "./app/app.reducer";
import bookStoreReducer from "./bookStore/bookStore.reducer";
import cartReducer from "./cart/cart.reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    app: appReducer,
    books: bookStoreReducer,
    cart: cartReducer,
});

export default rootReducer;

