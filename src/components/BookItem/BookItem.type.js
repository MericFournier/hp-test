import PropTypes from "prop-types";

export const bookType = {
    isbn: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    cover : PropTypes.string.isRequired,
    synopsis : PropTypes.array.isRequired,
};