import { useRouter } from 'next/router';
import { useAppSelector } from '../../../redux/store';
import { CoffeProduct } from '../../../interfaces/interfaces';
import Image from 'next/image';
import AddToCartButton from '@/app/components/elements/button/addToCartButton';
import Container from '../../elements/container/container';
import Link from 'next/link';
import './productInfo.css';
import '@/app/globalStyles/media.css';


const ProductInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = useAppSelector((state) => 
    state.coffeeProducts.coffeeProducts.find((param: CoffeProduct) => param.id === id)
  );

  if (!product) {
    return (
      <section>
        <Container className="product-info__container">
          <p className='product-info__not-found'>Товар не найден</p>
          <Link href={'/catalog/main'} className='link product-info__link'>Перейти в каталог</Link>
        </Container>
      </section>
    );
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