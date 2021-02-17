import React from "react";
import { connect } from 'react-redux';
import PropTypes, {shape} from "prop-types";
import {bookType} from "../BookItem/BookItem.type";

const Checkout = ({amount,offer,cart}) => {
    return (
        <div className={"checkout"}>
            { (cart.length>0 && offer)  &&
                <div className={"checkout__detail"}>
                    <p className={"price"}>Montant total : {amount} €</p>
                    <p className={"offer"}>Réduction spéciale : -{(amount - offer.price).toFixed(2)} €</p>
                    <p className={"total"}>votre panier : {offer.price} €</p>
                </div>
            }

            { (!cart || cart.length === 0)  &&
                <p className={"empty__cart"}>Remplissez votre panier pour voir nos offres</p>
            }

        </div>
    )

};

const mapStateToProps = state => ({
    amount: state.cart.amount,
    offer: state.cart.offers[0],
    cart: state.cart.cart,
});

Checkout.propTypes = {
    offer: PropTypes.object,
    amount: PropTypes.number.isRequired,
    cart: PropTypes.arrayOf(shape(bookType)).isRequired,
};

export default connect(mapStateToProps,null)(Checkout);

