import cartInitialStore from "./cart.initialStore";
import {
    FETCH_CART_START,
    FETCH_CART_ERROR,
    FETCH_CART_END,
    REMOVE_FROM_CART,
    ADD_TO_CART,
    SAVE_CART_START,
    SAVE_CART_END,
    SAVE_CART_ERROR,
    SET_CART,
    UPDATE_CART_AMOUNT,
    FETCH_CART_OFFERS_START,
    FETCH_CART_OFFERS_END,
    FETCH_CART_OFFERS_ERROR,
    SET_OFFERS,
    SET_BEST_OFFER,
    UPDATE_CART_TOTAL,
} from "../../actions/cart/cart.actions.types";
import {SET_BOOKS} from "../../actions/bookStore/bookStore.actions.types";

const cartReducer = (state = cartInitialStore, action) => {
    switch (action.type) {
        case FETCH_CART_START:
            return {
                ...state,
                fetchingCart : true,
            };
        case FETCH_CART_END:
            return {
                ...state,
                fetchingCart : false,
            };
        case FETCH_CART_ERROR:
            return {
                ...state,
                fetchingCartError : action.payload,
            };

        case SET_CART:
            return {
                ...state,
                cart : action.payload,
            };

        case SAVE_CART_START:
            return {
                ...state,
                savingCart : true,
            };
        case SAVE_CART_END:
            return {
                ...state,
                savingCart : false,
            };
        case SAVE_CART_ERROR:
            return {
                ...state,
                savingCartError : action.payload,
            };

        case ADD_TO_CART:
            return {
                ...state,
                cart : [...state.cart, action.payload],
            };

        case REMOVE_FROM_CART:
            let index = state.cart.findIndex((item) => item.isbn = action.payload.isbn);
            return {
                ...state,
                cart : [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],
            };

        case UPDATE_CART_AMOUNT:
            return {
                ...state,
                amount : action.payload,
            };

        case UPDATE_CART_TOTAL:
            return {
                ...state,
                total : action.payload,
            };

        case FETCH_CART_OFFERS_START:
            return {
                ...state,
                fetchingOffers : true,
            };

        case FETCH_CART_OFFERS_END:
            return {
                ...state,
                fetchingOffers : false,
            };

        case FETCH_CART_OFFERS_ERROR:
            return {
                ...state,
                fetchingOffersError : action.payload,
            };

        case SET_OFFERS:
            return {
                ...state,
                offers : action.payload,
            };

        case SET_BEST_OFFER:
            return {
                ...state,
                offers : action.payload,
            };



        default:
            return {...state};
    }
};

export default cartReducer;