import { NavigationItem} from "@/app/types/types";
import { CoffeeCatalogCardProps, Filters, ListItem, ProductCardItem } from "@/app/interfaces/interfaces";
import Image from 'next/image';
import cartIcon from '/public/img/cart.svg';
import accountIcon from '/public/img/account.svg'
import coffeIcon from '/public/img/product_coffee.png';
// import teaIcon from '/public/img/product_tea.png';
import Link from "next/link";

export const navigationProps: NavigationItem[] = [
    {id: 1, title: 'Каталог товаров', path: '/catalog/main'},
    {id: 2, title: 'Контакты', path: '/contacts/contacts'},
    ]

export const navigationIconsProps: NavigationItem[] = [
    {id: 1, title: <Image src={cartIcon} alt="Корзина" width={33} height={31}/>, path: '/cart/cart'},
    {id: 2, title: <Image src={accountIcon} alt="Профиль" width={29} height={32}/>, path: '/account/accountPage'}
    ]
    
export const productProps: ProductCardItem[] = [
    {
    id: 1, 
    title: 'Свежеобжаренный кофе', 
    img: <Image className="product__img" layout="responsive" src={coffeIcon} alt="Кофе" width={341} height={258}/>, 
    link: <Link href={'/catalog/coffee'} className="link product__link">
            Купить
          </Link>
    },
    // {
    // id: 2, 
    // title: 'Чай', 
    // img: <Image className="product__img" src={teaIcon} alt="Чай" width={215} height={258}/>, 
    // link: <Link href={'/pages/catalog/page.tsx'} className="link product__link">
    //             Купить
    //       </Link>
    // }
]

export const listProps: ListItem[] = [
    {id: 1, title: 'Всегда свежая обжарка', text: 'Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка'},
    {id: 2, title: 'Лучшие цены на продукцию', text: 'Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию'},
    {id: 3, title: 'Консультации 24/7', text: 'Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.'}
] 
export const DECORATIVE_IMG_URL = '/img/coffeeBean.svg';

export const ITEMS_PER_PAGE = 9;

export const initialFilters: Filters = {
    roast: '',
    bitterness: '',
    sourness: '',
    country: '',
    coffeeType: '',
    discount: false,
  };

  export const sortProducts = (products: CoffeeCatalogCardProps[], sortOrder: string): CoffeeCatalogCardProps[] => {
    return products.sort((a, b) => {
      const priceA = a.discount ? a.new : a.price;
      const priceB = b.discount ? b.new : b.price;
  
      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else if (sortOrder === 'desc') {
        return priceB - priceA;
      }
      return 0;
    });
  }; 
