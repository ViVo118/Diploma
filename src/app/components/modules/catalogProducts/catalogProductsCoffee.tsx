"use client"
import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { useEffect, useState } from "react";
import { doMapForCatalogCards } from "../../../../../utils/functions";
import { fetchCoffeeProducts } from "@/app/redux/thunks/thunks";
import { CoffeeCatalogCardProps} from "@/app/interfaces/interfaces";
import { ITEMS_PER_PAGE, initialFilters, sortProducts } from "@/app/constants/componentsConsts/componentsConsts";
import { Filters } from "@/app/interfaces/interfaces";
import AddToCartButton from "../../elements/button/addToCartButton";
import PaginationComponent from "../../pagination/pagination";
import Filter from "../../filter/filter";
import Sort from "../../sort/sort";
import './catalogProducts.css'
import '../sales/sales.css'
import { useRouter } from "next/router";



const CatalogProductsCoffee = () => {

  const {loading, coffeeProducts, error} = useAppSelector((state) => state.coffeeProducts)

  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(fetchCoffeeProducts())
  }, [dispatch])

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>('');
  
  const transformedProducts: CoffeeCatalogCardProps[] = coffeeProducts.map(product => ({
    ...product,
    button: <AddToCartButton className="catalog__card-btn" product={product}></AddToCartButton>}))

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;


    const handleFilterChange = (newFilters: Filters) => {
        setFilters(newFilters);
        setFiltersApplied(
          newFilters.roast !== '' ||
          newFilters.bitterness !== '' ||
          newFilters.sourness !== '' ||
          newFilters.country !== '' ||
          newFilters.coffeeType !== '' ||
          newFilters.discount !== false
        );
        setCurrentPage(1);
      };

          
    const filteredProducts = transformedProducts.filter(product => {
      const matchesRoast = filters.roast ? product.roast === parseInt(filters.roast) : true;
      const matchesBitterness = filters.bitterness ? product.bitter === parseInt(filters.bitterness) : true;
      const matchesSourness = filters.sourness ? product.sour === parseInt(filters.sourness) : true;
      const matchesCountry = filters.country ? product.country === filters.country : true;
      const matchesCoffeeType = filters.coffeeType ? product.type === filters.coffeeType : true;
      const matchesDiscount = filters.discount ? product.discount === filters.discount : true;
  
      return matchesRoast && matchesBitterness && matchesSourness && matchesCountry && matchesCoffeeType && matchesDiscount;
    });

    const sortedProducts = sortProducts(filteredProducts, sortOrder);
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);    

    const handleSortChange = (order: string) => {
      setSortOrder(order);
    };
  
    const handleCardClick = (id: string) => {
      router.push(`/product/${id}`);
    };
    
  return (
    <div className="coffee__products">
      <Filter onFilterChange={handleFilterChange}/>
      <Sort onSortChange={handleSortChange} />
          {loading && <div>Loading...</div>}
          {error && <div>{error.message}</div>}
          {sortedProducts.length > 0 ? (
        <div className='catalog__products__coffee'>
          {doMapForCatalogCards(filtersApplied ? sortedProducts : paginatedProducts, handleCardClick)}
        </div>
      ) : (
        <p>Ничего не найдено</p>
            )}
            {!filtersApplied && (
            <PaginationComponent 
            totalItems={sortedProducts.length} 
            itemsPerPage={ITEMS_PER_PAGE} 
            currentPage={currentPage} 
            onPageChange={handlePageChange}/>
            )}
            </div>
  );
};

export default CatalogProductsCoffee;