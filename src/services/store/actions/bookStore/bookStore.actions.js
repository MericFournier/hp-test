import {
    FETCH_BOOKS,
    FETCH_BOOKS_END,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_START,
    SET_BOOKS
} from "./bookStore.actions.types";

export const fetchBooks = () => ({
    type: FETCH_BOOKS,
    payload: true,
});

export const fetchBooksEnd = () => ({
    type: FETCH_BOOKS_END,
});

export const fetchBooksStart = () => ({
    type: FETCH_BOOKS_START,
});

export const fetchBooksError = (error) => ({
    type: FETCH_BOOKS_ERROR,
    payload: error,
});

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
});








