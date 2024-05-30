'use client'
import Products from "@/app/components/modules/products/products"
import LayoutComponent from "@/app/components/modules/layout/layout"
import Sales from "@/app/components/modules/sales/sales"
import '../pages.css'
import '@/app/globalStyles/globals.css'
import '@/app/globalStyles/media.css'


const GeneralCatalog = () => {
    return (
            <LayoutComponent>
                <Products/>
                <Sales/>
            </LayoutComponent>
    )
}

export default GeneralCatalog