
import Home from "../../containers/Home/Home";
import Books from "../../containers/Books/Books";
import Book from "../../containers/Book/Book";
import Cart from "../../containers/Cart/Cart";

const AppRoutes = [
    {
        name: "Home",
        path: "/",
        module: Home,
        inNav: false,
    },
    {
        name: "Books",
        path: "/books",
        module: Books,
        inNav: true,
    },
    {
        name: "Book",
        path: "/books/:slug",
        module: Book,
        inNav: false,
    },
    {
        name: "Cart",
        path: "/cart",
        module: Cart,
        inNav: true,
    },
];


export default AppRoutes;