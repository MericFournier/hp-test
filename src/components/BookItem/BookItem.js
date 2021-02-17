import PropTypes, { shape } from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/opacity.css';

import {bookType} from "./BookItem.type";
import ButtonBookItemCart from "./ButtonBookItemCart/ButtonBookItemCart";
import {LazyLoadImage} from "react-lazy-load-image-component";

const BookItem = ({book}) => {
    return (
        <div className={"book__item"}>
            <Link className={"book__wrapper"} key={`bookItem-${book.slug}`} to={`/books/${book.slug}`}>
                <div className={"book__cover__container"}>
                    <div className={"book__cover__wrapper"}>
                        <LazyLoadImage
                            alt={book.title}
                            src={book.cover}
                            effect="opacity"
                            threshold={0}
                            wrapperClassName={"book__cover"}
                        />
                    </div>
                </div>
                <p className={"book__title"}>{book.title}</p>
            </Link>
            <ButtonBookItemCart book={book} />
        </div>
    );
};

BookItem.propTypes = {
    book: shape(bookType).isRequired,
};

export default BookItem;