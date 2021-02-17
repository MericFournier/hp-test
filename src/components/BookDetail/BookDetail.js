import PropTypes, {shape} from "prop-types";
import React, { useState, useEffect, useRef } from 'react';
import {bookType} from "../BookItem/BookItem.type";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonBookItemCart from "../BookItem/ButtonBookItemCart/ButtonBookItemCart";
import BookDetailAnimation from "../../assets/js/animations/bookDetail.animation";

const BookDetail = ({book}) => {
    window.scrollTo(0, 0);
    const [pageReady, setPageReady] = useState(false);
    const [introduction, setIntroduction] = useState(false);
    const [coverReady, setCoverReady] = useState(false);
    const container = useRef(null);
    const title = useRef(null);
    const titleLight = useRef(null);
    const animationControleur = new BookDetailAnimation(container);

    useEffect(async () => {
        await animationControleur.splitText([title.current, titleLight.current]);
    }, []);

    useEffect(async () => {
        if ( coverReady && !introduction ) {
            await animationControleur.animationEnter(container.current);
            setPageReady(true);
            setIntroduction(true);
        }
    });

    return (
        <section className={`book__detail ${pageReady?'ready':''}`} ref={container}>
            <div className={"book__cover"}>
                <p className={"book__title--first"} id={"title"} ref={title}>{book.title}</p>
                <div className={"cover__container"}>
                    <div className={"wrap"}>
                        <LazyLoadImage
                            alt={book.title}
                            src={book.cover}
                            afterLoad={()=>{setCoverReady(true)}}
                            wrapperClassName={"cover__wrapper"}
                        />
                        <p className={"book__title"} id={"titleLight"} ref={titleLight}>{book.title}</p>
                    </div>
                </div>
                <div className={"cart__cta"} id={"cartCta"}>
                    <p>À partir de <span>{book.price}</span>€</p>
                    <ButtonBookItemCart book={book}  />
                </div>
            </div>
            <div className={"book__description"}>
                {book.synopsis.map((syn, index)=>{
                    return (
                        <p className={"syn"} key={`syn-${index}`}>{syn}</p>
                    )
                })}
            </div>
        </section>
    )
};

BookDetail.propTypes = {
    book: shape(bookType).isRequired,
};

export default BookDetail;

