import { useRouter } from 'next/router';
import { useAppSelector } from '../../../redux/store';
import { CoffeProduct } from '../../../interfaces/interfaces';
import Image from 'next/image';
import AddToCartButton from '@/app/components/elements/button/addToCartButton';
import Container from '../../elements/container/container';
import './productInfo.css';

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
    <section className="product-info">
      <Container className="product-info__container">
        <div className="product-details">
        <h2 className='product-info__title'>{name}</h2>
        <Image className="product-info__image" src={img} alt={name} width={200} height={200}/>
        <p className='product-info__description'>{description}</p>
        <p>Страна происхождения: {country}</p>
        <p>Вес: {weight} гр.</p>
        <p>Вид кофейного дерева: {type}</p>
        <p>Цена{discount ? ` со скидкой: ${newPrice} BYN` : `: ${price} BYN`}</p>
        <AddToCartButton className='prouct-info__btn' product={product}></AddToCartButton>
        </div>
      </Container>
    </section>
  );
};

export default ProductInfo;