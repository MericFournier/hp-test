import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types';
import {bookType} from "../BookItem.type";
import {itemIsInCart} from "../../../assets/js/utils/utils";
import {addToCart, removeFromCart} from "../../../services/store/actions/cart/cart.actions";
import React from "react";

const ButtonBookItemCart = ({addToCart, removeFromCart, book, cart}) => {
    return (
        <button className={"buttonCart"} onClick={()=>{ itemIsInCart(book,cart) ? removeFromCart(book) : addToCart(book)}}>
            <span className={"button__cart__label"}> { itemIsInCart(book,cart) ? 'Retirer du panier' : 'Ajouter au panier'}</span>
        </button>
    )
};

ButtonBookItemCart.propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    book: shape(bookType).isRequired,
    cart: PropTypes.arrayOf(shape(bookType)).isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
});

const mapDispatchToProps = {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
};

export default connect(mapStateToProps,mapDispatchToProps)(ButtonBookItemCart);