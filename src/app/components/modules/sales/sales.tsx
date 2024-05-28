"use client"
import Container from "../../elements/container/container";
import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { useEffect } from "react";
import { doMapForCatalogCards } from "../../../../../utils/functions";
import { fetchCoffeeProducts } from "@/app/redux/thunks/thunks";
import { CoffeeCatalogCardProps } from "@/app/interfaces/interfaces";
import AddToCartButton from "../../elements/button/addToCartButton";
import "./sales.css";

const Sales = () => {

  const {loading, coffeeProducts, error} = useAppSelector((state) => state.coffeeProducts)

  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(fetchCoffeeProducts())
  }, [dispatch])

  const discountedCoffeeProducts = coffeeProducts?.filter(product => product.discount === true).slice(0, 3);
  const transformedProducts: CoffeeCatalogCardProps[] = discountedCoffeeProducts.map(product => ({
    ...product,
    button: <AddToCartButton className="catalog__card-btn" product={product}></AddToCartButton>}))

  return (
    <section className="sales">
      <Container className="sales__container">
        <div className="sales__content">
          <h2 className="sales__title">Товары со скидкой</h2>
          <p className="sales__text">
            Наша компания предлагает покупать товар со скидкой не только в дни
            распродаж <span className="second__line">или в течение действия ограниченных предложений, но и
            пользоваться скидками постоянно!</span>
          </p>

          {loading && <div>Loading...</div>}
          {error && <div>{error.message}</div>}
          {coffeeProducts && (
            <div className='sales__products'>
              {doMapForCatalogCards(transformedProducts)}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Sales;
