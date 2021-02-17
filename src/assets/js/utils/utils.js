/**
 * Get slug of a string
 * @param {String} str - The string we want to convert in slug.
 * @return {String} the slug of the string
 */
export const string_to_slug = (str) => {
    if ( str ) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse
        return str;
    } else {
        return false;
    }

};

/**
 * Determine if a book is in cart
 * @param {Object} book - Book to test
 * @param {Array} cart - Array of books selected
 * @return {Boolean}
 */
export const itemIsInCart = (book,cart) => (!!cart.find( (item)=> item.isbn === book.isbn));



