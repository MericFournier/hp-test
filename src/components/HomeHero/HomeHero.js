import BookList from "../BookList/BookList";
import {NavLink} from "react-router-dom";


const HomeHero = () => (
    <section className={"home__hero"}>
        <h1 className={"hero__title"}>Henri Potier</h1>
        <h3 className={"hero__subtitle"}>La boutique officielle</h3>
        <BookList limit={3} />
        <NavLink className={"hero__link"} to={'/books'}>voir tous les livres</NavLink>
    </section>
);

export default HomeHero;