import { CartProductCardProps }from "@/app/interfaces/interfaces";
import Image from "next/image";
import Button from "../../elements/button/button";
import './cart.css';

const CartProductCard: React.FC<CartProductCardProps> = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.discount ? item.new : item.price) * item.quantity, 0);
  const roundedPrice = totalPrice.toFixed(2);

  return (
    <div className="cart__products">
      {cartItems.map(item => (
        <div className="cart__item" key={item.id}>
          <div className="cart__item-info">
            <Image className="cart__item-img" src={item.img} alt={item.name} width={100} height={100}/>
            <div>
              <p>{item.name}</p>
              <p>{item.weight} гр.</p>
            </div>
          </div>
          <div className="cart__item-price">
            <p>{item.discount ? item.new : item.price} BYN</p>
          </div>
          <div className="cart__item-quantity">
            <Button className="quantity-btn" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
            <span>{item.quantity}</span>
            <Button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
          </div>
          <div className="cart__item-total">
            <p>{((item.discount ? item.new : item.price) * item.quantity).toFixed(2)} BYN</p>
          </div>
          <Button className="cart__item-remove" onClick={() => removeFromCart(item.id)}>Удалить</Button>
        </div>
      ))}
      <div className="cart__total">
        <p className="total__price">Сумма заказа: {roundedPrice} BYN</p>
      </div>
      <Button className="cart-clear-btn" onClick={clearCart}>Очистить корзину</Button>
    </div>
  );
}

export default CartProductCard;