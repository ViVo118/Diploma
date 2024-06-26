import Link from "next/link"
import {  NavigationItem } from "@/app/types/types";
import Image from "next/image";
import { DECORATIVE_IMG_URL } from "@/app/constants/componentsConsts/componentsConsts";
import { ProductCardItem, CoffeeCatalogCardProps, ListItem } from "@/app/interfaces/interfaces";


export function doMapForNavList (arrName: NavigationItem[]) {
    return (
    arrName.map(({id, title, path}): React.ReactNode =>
        <Link key={id} href={path}>{title}</Link>
    )
)
}

export function doMapForProductCards(product: ProductCardItem[]) {
    return product.map((item) => {
        return (
            <div className="product__card__item" key={item.id}>
                <div className="product__img-container">
                    {item.img}
                </div>
                <p className="product__card-title">{item.title}</p>
                {item.link}
            </div>
        )
    })
}

export function doMapForList(list: ListItem[]) {
    return list.map((item) => (
        <div className="list__item" key={item.id}>
            <div className="list__img"></div>
            <div className="list__text">
            <h4 className="list__title">{item.title}</h4>
            <p className="list__description">{item.text}</p>
            </div>
        </div>
    ))
}

export function generateDecorativeElements(count: number, imgUrl: string) {
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push(
        <Image
          key={i}
          src={imgUrl}
          alt=""
          width={16}
          height={16}
          className="product__coffee-bean"
        />
      );
    }
    return elements;
  }

export  function generateDecorativeCircles(count: number, filledCirclesCount: number, baseClass: string) {
    const circles = [];
    for (let i = 0; i < count; i++) {
      const className = i < filledCirclesCount ? `${baseClass} filled` : baseClass;
      circles.push(<span key={i} className={className} />);
    }
    return circles;
  }
  export function doMapForCatalogCards(productsArr: CoffeeCatalogCardProps[],  handleCardClick: (id: string) => void) {    
    return productsArr.map((item: CoffeeCatalogCardProps) => {
      const oldPriceClass = item.discount ? 'catalog__card-old-price' : '';
        return (
              <div className="catalog__card-item" key={item.id}>
                  {item.discount && (
                    <h5 className="catalog__card-sale">Скидки</h5>
                  )}
                <div className="catalog__card-img-container" onClick={() => handleCardClick(item.id)}>
                <Image src={item.img} alt={item.name} className="catalog__card-img" width={200} height={200}></Image>
                </div>
                <p className="catalog__card-title">{item.name}</p>
                <span className='catalog__card-roast'>{generateDecorativeElements(item.roast, DECORATIVE_IMG_URL)}</span>
                <div className='catalog__card-sour'>
                  <p className="catalog__card-taste">Кислинка</p>
                  <span className="catalog__card-circles">{generateDecorativeCircles(4, item.sour, 'circle')}</span>
                </div>
                <div className='catalog__card-bitter'>
                <p className="catalog__card-taste">Горчинка</p>
                <span className="catalog__card-circles">{generateDecorativeCircles(3, item.bitter, 'circle')}</span>
                </div>
                <p className={`catalog__card-price ${oldPriceClass}`}>{item.price} BYN</p>
                {item.discount && (
                  <p className="catalog__card-discount">{item.new} BYN</p>
                )}
                {item.button}
            </div>
        )
    })
}

export const validatePhone = (value: string) => {
  const regex = /^(\+)[0-9]{12}$/;
  return regex.test(value) || 'Введите номер телефона в формате +37529ХХХХХХХ';
}
export const validateForm = (value: string) => {
  const regex = /[а-яА-Я0-9\s.,'-]$/;
  return regex.test(value) || 'Введено недопустимое значение';
};

export const validateEmail = (value: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(value) || 'Введен неверный email адрес';
}