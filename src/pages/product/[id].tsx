import LayoutComponent from "@/app/components/modules/layout/layout";
import ProductInfo from "../../app/components/modules/productInfo/productInfo";
import '@/app/globalStyles/globals.css'
import '../pages.css'

const ProductPage = () => {
    return (
    <LayoutComponent>
        <ProductInfo />
    </LayoutComponent>
    );
};

export default ProductPage;