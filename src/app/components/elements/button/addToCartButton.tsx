import { addItem, removeItem } from '@/app/redux/cart/slice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { useState, useEffect } from 'react';
import { AddToCartButtonProps } from '@/app/interfaces/interfaces';
import './button.css'

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ className, product }) => {

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const [addedProduct, setAddedProduct] = useState(false);

  useEffect(() => {
    setAddedProduct(items.some(item => item.id === product.id));
  }, [items, product.id]);

  const handleButtonClick = () => {
    if (addedProduct) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
    setAddedProduct(!addedProduct);
  };

  return (
    <button className={`btn ${className}`} onClick={handleButtonClick}>
      {addedProduct ? 'Удалить' : 'В корзину'}
    </button>
  );
};

export default AddToCartButton;