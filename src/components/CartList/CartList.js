import React from 'react';
import { connect } from 'react-redux';
import PropTypes, {shape} from "prop-types";
import {bookType} from "../BookItem/BookItem.type";

import BookItem from "../BookItem/BookItem";

const CartList = ({cart}) => {
    if ( cart.length > 0 ) {
        return (
            <ul className={"cartlist"}>
                {cart.map((book, index)=>{
                    return (
                        <BookItem
                            key={`book-${index}`}
                            book={book}
                        />
                    )
                })}
            </ul>
        );
    } else {
        return (
            <p>Votre panier est vide</p>
        )
    }
};

CartList.propTypes = {
    cart: PropTypes.arrayOf(shape(bookType)).isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
});

export default connect(mapStateToProps,null)(CartList);