'use client'
import LayoutComponent from '@/app/components/modules/layout/layout'
import Container from '@/app/components/elements/container/container'
import CatalogProductsCoffee from '@/app/components/modules/catalogProducts/catalogProductsCoffee'
import './coffee.css'
import '../pages.css'
import '@/app/globalStyles/globals.css'
const CoffeeCatalog = () => {
    return (
            <LayoutComponent>
                <section className="catalog">
                    <Container className="catalog__container">
                        <div className="catalog__text">
                            <h1 className="catalog__title">Свежеобжаренный кофе</h1>
                        </div>
                        <div className='catalog__products'>
                            <CatalogProductsCoffee/>
                        </div>
                    </Container>
                </section>
            </LayoutComponent>
    )
}

export default CoffeeCatalog