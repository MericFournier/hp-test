import {SET_APP_READY} from "../../actions/app/app.actions.types";
import {fetchBooks} from "../../actions/bookStore/bookStore.actions";
import {fetchCart} from "../../actions/cart/cart.actions";

const appMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === SET_APP_READY) { // only apply middleware to actions of type API
        dispatch(fetchBooks());
        dispatch(fetchCart());
    } else {
        return;
    }
};
export default appMiddleware;