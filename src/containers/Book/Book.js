import BookDetail from "../../components/BookDetail/BookDetail";
import {useParams} from "react-router";
import { connect } from 'react-redux';
import PropTypes, {shape} from "prop-types";
import {bookType} from "../../components/BookItem/BookItem.type";
import BookList from "../../components/BookList/BookList";
import Loader from "../../components/Loader/Loader";

const Book = ({books}) => {
    const { slug } = useParams();
    const book = books.find((item)=> item.slug === slug);
    return (
        <section className={"page book"}>
            { (books && book) &&
                <BookDetail book={book} />
            }

            { (books && !book) &&
                <>
                    <div className={"book__unavailable"}>
                        <p className={"info"}>Oups, ce livre n'est plus disponible</p>
                        <BookList limit={3} />
                    </div>
                </>
            }

            {!books &&
            <>
                <Loader/>
            </>
            }

        </section>
    )

};

Book.propTypes = {
    books: PropTypes.arrayOf(shape(bookType)).isRequired,
};

const mapStateToProps = state => ({
    books: state.books.books,
});


export default connect(mapStateToProps,null)(Book);