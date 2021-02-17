import React, {useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import {LazyLoadImage} from "react-lazy-load-image-component";
import BookDetailTransition from "../../../assets/js/animations/bookDetail.transition";
import PropTypes, {shape} from "prop-types";
import {bookType} from "../../BookItem/BookItem.type";
import BookItem from "../../BookItem/BookItem";

const BookTransition = ({book,event,items}) => {
    const item = useRef(null);
    const animationControleur = new BookDetailTransition();
    const history = useHistory();

    useEffect(async () => {
        document.body.style.overflow = 'hidden';
        await animationControleur.animationEnter(item.current, event, items);
        document.body.style.overflow = 'unset';
        history.push(`/books/${book.slug}`);
    }, []);

    return (
        <div className={"book__transition"}>
            <div className={"transition__container"}>
                <div className={"transition__item"} ref={item}>
                    <LazyLoadImage
                        alt={book.title}
                        src={book.cover}
                        wrapperClassName={"cover__wrapper"}
                    />
                </div>
            </div>
        </div>
    )
};

BookTransition.propTypes = {
    book: shape(bookType).isRequired,
    event: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
};


export default connect(null,null)(BookTransition);

