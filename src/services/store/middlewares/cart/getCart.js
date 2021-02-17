import {fetchCartStart, fetchCartEnd, fetchCartError, setCart} from "../../actions/cart/cart.actions";


export const getInitialCart = (dispatch, getState) => {
    if (dispatch && getState) {
        const itemKey = "henriPottierBooksCart";
        dispatch(fetchCartStart());
        let initialCart = false;
        if ( localStorage.getItem(itemKey) ) {
            initialCart = localStorage.getItem(itemKey);
            if ( initialCart ) {
                initialCart = JSON.parse(initialCart);
            }
        } else {
            initialCart = [];
        }
        dispatch(setCart(initialCart));
        dispatch(fetchCartEnd());
    } else {
        dispatch(fetchCartError());
        return false;
    }
};