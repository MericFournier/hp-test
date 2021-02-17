import { updateCartAmount } from "../../actions/cart/cart.actions";

export const setCartAmount = (dispatch, getState) => {
    if ( dispatch && getState ) {
        const cart = getState().cart.cart;
        if ( cart ) {
            const totalCart = cart.reduce( (prev, cur) => {
                return prev + cur.price;
            }, 0);
            dispatch(updateCartAmount(totalCart));
        }
    }
};