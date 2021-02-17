import {
    ADD_TO_CART,
    FETCH_CART,
    FETCH_CART_END,
    FETCH_CART_ERROR,
    FETCH_CART_OFFERS_END,
    FETCH_CART_OFFERS_ERROR,
    FETCH_CART_OFFERS_START,
    FETCH_CART_START,
    REMOVE_FROM_CART,
    SAVE_CART,
    SAVE_CART_END,
    SAVE_CART_ERROR,
    SAVE_CART_START,
    SET_CART,
    SET_OFFERS,
    UPDATE_CART_AMOUNT,
    SET_BEST_OFFER,
    UPDATE_CART_TOTAL,
} from "./cart.actions.types";
import {SET_BOOKS} from "../bookStore/bookStore.actions.types";

export const fetchCart = () => ({
    type: FETCH_CART,
});

export const saveCart = () => ({
    type: SAVE_CART,
});

export const fetchCartStart = () => ({
    type: FETCH_CART_START
});

export const fetchCartEnd = () => ({
    type: FETCH_CART_END
});

export const fetchCartError = (error) => ({
    type: FETCH_CART_ERROR,
    payload: error,
});

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
});

export const saveCartStart = () => ({
    type: SAVE_CART_START,
});

export const saveCartEnd = () => ({
    type: SAVE_CART_END,
});

export const saveCartError = (value) => ({
    type: SAVE_CART_ERROR,
    payload: value,
});

export const fetchOffersStart = () => {
    return {
        type: FETCH_CART_OFFERS_START,
    }
};

export const fetchOffersEnd = () => {
    return {
        type: FETCH_CART_OFFERS_END,
    }
};

export const fetchOffersError = (error) => {
    return {
        type: FETCH_CART_OFFERS_ERROR,
        payload: error,
    }
};

export const setOffers = (offers) => {
    return {
        type: SET_OFFERS,
        payload: offers,
    }
};

export const addToCart = (book) => {
    return {
        type: ADD_TO_CART,
        payload: book,
    }
};

export const removeFromCart = (book) => {
    return {
        type: REMOVE_FROM_CART,
        payload: book,
    }
};

export const updateCartAmount = (value) => {
    return {
        type: UPDATE_CART_AMOUNT,
        payload: value,
    }
};

export const updateCartTotal = (value) => {
    return {
        type: UPDATE_CART_TOTAL,
        payload: value,
    }
};







