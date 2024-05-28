import Container from "../../elements/container/container";
import DeliveryForm from "../../elements/form/deliveryForm";
import './delivery.css'


const Delivery = () => {

    return (
        <section className="delivery">
            <Container className="delivery__container">
                <div className="delivery__content">
                    <h3 className="delivery__title">Доставка</h3>
                    <p className="delivery__text">
                        Мы осуществляем доставку кофе по всей Беларуси.
                    </p>
                        <DeliveryForm/>   
                </div>
            </Container>
        </section>
    )
}   

export default Delivery