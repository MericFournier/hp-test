import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/rootReducer";
import appMiddleware from "./middlewares/app";
import bookStoreMiddleware from "./middlewares/bookStore";
import cartMiddleware from "./middlewares/cart";

const store = createStore(
    rootReducer,
    applyMiddleware(
        appMiddleware,
        bookStoreMiddleware,
        cartMiddleware,
    ));

window.store = store;

export default store;
