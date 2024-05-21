import Container from '../../elements/container/container';
import Image from 'next/image';
import List from '../../elements/list/list';
import './advantages.css';
import Button from '../../elements/button/button';

const Advantages = () => {
    return(
        <span className="advantages__wrapper">
            <div className="advantages__decor_top">
                <Image src='/img/adv_decor_top.svg' width={100} height={200} alt=''/>
            </div>

            <section className="advantages">
                <Container className="advantages__container">
                    <div className="advantages__content">
                        <div className='advantages__image'>
                            <Image src='/img/advantage.png' width={750} height={600} alt='Кофе'/>
                        </div>
                        <div className='advantages__text'>
                            <h2 className="advantages__title">
                                Почему стоит работать <span className='second__line'> именно с нами? </span>
                            </h2>
                            <List></List>
                        </div>
                    </div>
                    <Button className="advantages__btn">Перейти в каталог</Button>
                </Container>
            </section>

            <div className="advantages__decor_bot">
                <Image src='/img/adv_decor_bot.svg' width={100} height={100} alt=''/>
            </div>
        </span>
    )
}

export default Advantages;