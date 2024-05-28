import '@/app/globalStyles/globals.css'
import '../pages.css'
import './contacts.css'
import LayoutComponent from '@/app/components/modules/layout/layout'
import Container from '@/app/components/elements/container/container'
import Link from 'next/link'

const Contacts = () => {

    return (
        <LayoutComponent>
            <section className='contacts'>
                <Container className='contacts__container'> 
                    <div className='contacts__header'>
                        <h3 className='header__title'>Контакты</h3>
                    </div>
                    <div className='contacts'>
                        <div className='contacts__info'>
                            <div className='contacts__phone'>
                                <p>Телефон:</p>
                                <p>+375(29)123-45-67 (A1)</p>
                            </div>
                            <div className='contacts__email'>
                                <p>E-mail:</p>
                                <Link href="mailto:someemail@example.com">someemail@example.com</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </LayoutComponent>
    )
}

export default Contacts