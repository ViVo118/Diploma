import  { doMapForProductCards } from "../../../../../utils/functions";
import './productCards.css';
import { productProps } from "@/app/constants/componentsConsts/componentsConsts";

const ProductCards = () => {
    return (
        <div className="product__cards">
            {doMapForProductCards(productProps)}
        </div>

    )
}

export default ProductCards