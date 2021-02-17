import CartList from "../../components/CartList/CartList";
import Checkout from "../../components/CheckOut/Checkout";

const Cart = () => (
    <section className={"cart"}>
        <CartList/>
        <Checkout/>
    </section>
);

export default Cart;