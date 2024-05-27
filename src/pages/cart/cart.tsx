import { Provider } from "react-redux";
import Cart from "../../app/components/elements/cart/cartComponent";
import { store } from "@/app/redux/store";
import '../pages.css'

const CartPage = () => {

    return (
    <Provider store={store}>
        <Cart />
    </Provider>
    );
};
export default CartPage