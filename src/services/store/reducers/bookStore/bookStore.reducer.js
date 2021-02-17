import { bookStoreInitialState } from "./bookStore.initialState";
import {
    FETCH_BOOKS_END,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_START,
    SET_BOOKS
} from "../../actions/bookStore/bookStore.actions.types";


const bookStoreReducer =  (state = bookStoreInitialState, action) => {
    switch (action.type) {

        case FETCH_BOOKS_START:
            return {
                ...state,
                fetching : true,
            };

        case FETCH_BOOKS_END:
            return {
                ...state,
                fetching : false,
            };

        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                error : action.payload,
            };

        case SET_BOOKS:
            return {
                ...state,
                books : action.payload,
            };

        default:
            return {...state};
    }
};

export default bookStoreReducer;