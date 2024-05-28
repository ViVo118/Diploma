import { useAppSelector, RootState, store } from "@/app/redux/store";
import { Provider } from "react-redux";
import "./cart.css";

const CartIcon: React.FC = () => {
    const items = useAppSelector((state: RootState) => state.cart.items);
  
    return (
    <Provider store={store}>
      <div className="cart-icon">
        {items.length > 0 && <span className="cart-count">{items.length}</span>}
      </div>
      </Provider>
    );
  };
  
  export default CartIcon;