import Products from "@/app/components/modules/products/products"
import LayoutComponent from "@/app/components/modules/layout/layout"
import '@/app/globalStyles/globals.css'
import './main.css'

const GeneralCatalog = () => {
    return (
        <LayoutComponent>
            <Products/>
        </LayoutComponent>
    )
}

export default GeneralCatalog