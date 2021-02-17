import { FETCH_BOOKS } from "../../actions/bookStore/bookStore.actions.types";
import {fetchBooksRequest} from "./fetchBooks";

const bookStoreMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if ( action.type == FETCH_BOOKS) {
        fetchBooksRequest(dispatch);
    } else {
        return;
    }
};


export default bookStoreMiddleware;