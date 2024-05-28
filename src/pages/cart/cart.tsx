import Cart from "../../app/components/modules/cart/cartComponent";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Delivery from "@/app/components/modules/delivery/delivery";
import LayoutComponent from "@/app/components/modules/layout/layout";
import '../pages.css'

const CartPage = () => {

    return (
    <Provider store={store}>
        <LayoutComponent>
            <Cart />
            <Delivery/>
        </LayoutComponent>
    </Provider>
    );
};
export default CartPage