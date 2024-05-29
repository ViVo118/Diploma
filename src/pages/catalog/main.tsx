'use client'
import Products from "@/app/components/modules/products/products"
import LayoutComponent from "@/app/components/modules/layout/layout"
import Sales from "@/app/components/modules/sales/sales"
import { Provider } from "react-redux"
import { store } from "@/app/redux/store"
import '@/app/globalStyles/globals.css'
import '../pages.css'
import '@/app/globalStyles/media.css'


const GeneralCatalog = () => {
    return (
        <Provider store={store}>
            <LayoutComponent>
                <Products/>
                <Sales/>
            </LayoutComponent>
        </Provider>
    )
}

export default GeneralCatalog