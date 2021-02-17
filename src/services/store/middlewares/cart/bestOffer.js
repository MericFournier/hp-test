/**
 * Determine the value of each offers
 * @param {offers} array - Array of offers non ordered
 * @param {cartAmount} number - The total amount of the cart
 * @return {offers} array - Array of offers with value of each offer
 */

const offersValues = (offers,cartAmount) => {
    return offers.map((offer)=>{
        switch (offer.type) {
            case 'percentage':
                offer.price = cartAmount - (cartAmount * offer.value / 100);
                return offer;

            case 'minus':
                offer.price = cartAmount-offer.value;
                return offer;

            case 'slice':
                offer.price = cartAmount - (Math.floor(cartAmount / offer.sliceValue) * offer.value);
                return offer;

            default:
                offer.price = cartAmount;
                return offer;
        }
    });
};

/**
 * Order offers by order
 * @param {offers} array - Array of offers non ordered
 * @return {offers} array - Array of offers ordered by value
 */
const offersOrder = (offers) => {
    return offers.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
    });
};


export const selectBestOffer = (offers, cartAmount) => {
    return offersOrder(offersValues(offers,cartAmount));
};