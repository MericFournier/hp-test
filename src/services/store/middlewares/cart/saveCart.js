import {saveCartStart, saveCartEnd, saveCartError} from "../../actions/cart/cart.actions";


export const saveCart = (dispatch, getState) => {
    if (dispatch && getState) {
        let cart = getState().cart.cart;
        const itemKey = "henriPottierBooksCart";
        dispatch(saveCartStart());
        if ( cart ) {
            cart = JSON.stringify(cart);
            let success = localStorage.setItem(itemKey,cart);
            if ( !success ) {
                dispatch(saveCartError());
            }
            dispatch(saveCartEnd());
        } else {
            dispatch(saveCartError());
        }
    }
    else {
        dispatch(saveCartError());
        return false;
    }
};