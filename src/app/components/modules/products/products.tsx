import Container from "../../elements/container/container";
import ProductCards from "../../elements/product/productCards";
import './products.css';
// import '@/app/globalStyles/media.css'

const Products = () => {
    return (
        <section className="products">
            <Container className="products__container">
                <div className="products__content">
                    <h2 className="products__title">Каталоги нашей продукции</h2>
                    <ProductCards></ProductCards>
                </div>
            </Container>
        </section>
    )
}   

export default Products