import axios from 'axios';
import {string_to_slug} from "../../../../assets/js/utils/utils";
import {fetchBooksStart, setBooks, fetchBooksError, fetchBooksEnd} from "../../actions/bookStore/bookStore.actions";

/**
 * Fetch books from API and dispatch them in store
 * @param {dispatch} function - Dispatch function from middleware
 */
export const fetchBooksRequest = (dispatch) => {
    const url = "https://henri-potier.techx.fr/books";
    if (dispatch) {
        dispatch(fetchBooksStart());
        axios({
            method: 'get',
            url: url,
        })
            .then(({ data }) => {
                data.map( item => item.slug = string_to_slug(item.title ));
                dispatch(setBooks(data));
            })
            .catch(error => {
                dispatch(fetchBooksError(error));
            })
            .finally(() => {
                dispatch(fetchBooksEnd());
                return true;
            });
    } else {
        return false;
    }

};