import { useRouter } from 'next/router';
import { useAppSelector } from '../../app/redux/store';
import { CoffeProduct } from '../../app/interfaces/interfaces';
import Image from 'next/image';
import AddToCartButton from '@/app/components/elements/button/addToCartButton';

const ProductInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = useAppSelector((state) => 
    state.coffeeProducts.coffeeProducts.find((param: CoffeProduct) => param.id === id)
  );

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const { img, name, description, country, weight, type, discount, price, new: newPrice } = product;

  return (
        <div className="product-details">
        <h1>{name}</h1>
        <Image className="cart__item-img" src={img} alt={name} width={200} height={200}/>
        <p>{description}</p>
        <p>Country: {country}</p>
        <p>Weight: {weight} g</p>
        <p>Type: {type}</p>
        <p>Price: {discount ? `${newPrice} BYN` : `${price} BYN`}</p>
        <AddToCartButton className={''} product={product}></AddToCartButton>
        </div>
  );
};

export default ProductInfo;