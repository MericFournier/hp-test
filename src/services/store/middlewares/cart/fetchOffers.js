import axios from 'axios';
import {selectBestOffer} from "./bestOffer";
import {fetchOffersStart, fetchOffersEnd, fetchOffersError, setOffers, updateCartTotal} from "../../actions/cart/cart.actions";

const API_URL = "https://henri-potier.techx.fr/books/";
const API_ROUTE = "/commercialOffers";

const getCartUrl = (cart) => {
    return cart.length>0 ? cart.map((cartItem,index) => (cartItem.isbn)).join(',') : false;
};

export const fetchOffers = async (dispatch, getState) => {

    dispatch(fetchOffersStart());

    const cart = getState().cart.cart;
    const cartAmount = getState().cart.amount;
    const ISBNS = getCartUrl(cart);
    if ( ISBNS ) {
        try {
            const request = await axios.get(`${API_URL}${ISBNS}${API_ROUTE}`);
            const offers = selectBestOffer(request.data.offers, cartAmount);
            dispatch(setOffers(offers));
            dispatch(fetchOffersEnd());
        } catch(error) {
            dispatch(fetchOffersError(error));
        }
    } else {
        dispatch(setOffers([]));
    }
};
