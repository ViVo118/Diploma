import Container from '@/app/components/elements/container/container'
import CartProductCard from '@/app/components/modules/cart/cartProductCard'
import { useAppDispatch, useAppSelector } from '@/app/redux/store'
import { removeItem, updateQuantity, clearCart } from '@/app/redux/cart/slice'
import '@/app/globalStyles/globals.css'
import './cart.css'

    
const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeItem(productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
      <section className="cart">
        <Container className="cart__container">
          <div className='cart__content'>
            <h3 className="cart__title">Всего товаров в корзине: {totalItems}</h3>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
              ) : (
              <CartProductCard
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
                updateQuantity={handleUpdateQuantity}
                clearCart={handleClearCart}
              />
              )}
          </div>
        </Container>
      </section>
  );
};

  export default Cart;