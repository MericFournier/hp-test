import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes, {shape} from "prop-types";
import {bookType} from "../BookItem/BookItem.type";

import Loader from "../Loader/Loader";
import BookItem from "../BookItem/BookItem";
import BookTransition from "./BookTransition/BookTransition";

const BookList = ({books, limit = false}) => {
    const [selectedBook, setSelectedBook] = useState(false);
    const itemsBooks = useRef([]);
    if (books && books.length > 0) {
        const size = limit ? limit : books.length;
        return (
            <>
                {selectedBook &&
                    <BookTransition book={selectedBook.book} event={selectedBook.ev} items={itemsBooks.current}/>
                }

                <ul className={"booklist"}>
                    {books.slice(0, size).map((book, index) => {
                        return (
                            <li className={"booklistItem"} key={`bookItem-${index}`} ref={(element) => itemsBooks.current[index] = element}>
                                <div className={"overlay"} onClick={(e)=>{setSelectedBook({book:book, ev:{...e}} )}}> </div>
                                <BookItem
                                    book={book}
                                />
                            </li>

                        )
                    })}
                </ul>


            </>
        )
    } else {
        return (
            <Loader/>
        )
    }
};

BookList.propTypes = {
    books: PropTypes.arrayOf(shape(bookType)).isRequired,
    limit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

const mapStateToProps = state => ({
    books: state.books.books,
});

export default connect(mapStateToProps, null)(BookList);
