import {setBooks} from "./bookStore.actions";
import {SET_BOOKS} from "./bookStore.actions.types";

describe('setBooks action', () => {
    it('should create an action to add books', () => {
        const books = Array({},{},{});
        const expectedAction = {
            type: SET_BOOKS,
            payload: books,
        };
        expect(setBooks(books)).toEqual(expectedAction)
    });
});