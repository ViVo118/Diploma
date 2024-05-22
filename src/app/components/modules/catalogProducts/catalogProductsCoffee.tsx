"use client"
import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { useEffect } from "react";
import { doMapForCatalogCards } from "../../../../../utils/functions";
import { fetchCoffeeProducts } from "@/app/redux/thunks/thunks";
import { CoffeeCatalogCardProps} from "@/app/types/types";
import Button from "../../elements/button/button";
import './catalogProducts.css'
import '../sales/sales.css'


const CatalogProductsCoffee = () => {

  const {loading, coffeeProducts, error} = useAppSelector((state) => state.coffeeProducts)

  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(fetchCoffeeProducts())
  }, [dispatch])

  const transformedProducts: CoffeeCatalogCardProps[] = coffeeProducts.map(product => ({
    ...product,
    button: <Button className="catalog__card-btn">В корзину</Button>}))

  return (
    <div className="coffee__products">
          {loading && <div>Loading...</div>}
          {error && <div>{error.message}</div>}
          {coffeeProducts && (
            <div className='catalog__products__coffee'>
              {doMapForCatalogCards(transformedProducts)}
            </div>
          )}
    </div>
  );
};

export default CatalogProductsCoffee;
