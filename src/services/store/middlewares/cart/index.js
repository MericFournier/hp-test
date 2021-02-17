import {FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART, SET_CART, UPDATE_CART_AMOUNT, SET_OFFERS} from "../../actions/cart/cart.actions.types";
import {fetchCartStart, fetchCartEnd, fetchCartError, saveCartStart, saveCartEnd, saveCartError, setCart} from "../../actions/cart/cart.actions";
import { getInitialCart } from "./getCart";
import { saveCart } from "./saveCart";
import {fetchOffers} from "./fetchOffers";
import { setCartAmount } from "./updateCartAmount";

const cartMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);

    if ( action.type === FETCH_CART) {
        getInitialCart(dispatch, getState);
    } else if ( action.type === ADD_TO_CART || action.type === REMOVE_FROM_CART || action.type === SET_CART ) {
        saveCart(dispatch, getState);
        setCartAmount(dispatch, getState);
    } else if ( action.type === UPDATE_CART_AMOUNT ) {
        fetchOffers(dispatch, getState);
    } else {
        return;
    }
};

export default cartMiddleware;