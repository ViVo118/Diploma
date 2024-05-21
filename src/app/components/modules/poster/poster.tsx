import Container from "../../elements/container/container";
import Button from "../../elements/button/button";
import Link from "next/link";
import Image from "next/image";
import "./poster.css"
const Poster = () => {
    return(
            <section className="poster">
                <Container className="poster__container">
                    <div className="poster__content">
                        <h1>Свежеобжаренный кофе</h1>
                        <p className="poster__text">Кофе высококачественной обжарки из разных стран <span className="second__line">произрастания с доставкой на дом.</span></p>
                        <p className="poster__text">Мы обжариваем кофе каждые выходные.</p>
                        <Link href={'/pages/catalog/page.tsx'}>
                            <Button className="poster__btn">Посмотреть каталог</Button>
                        </Link>
                        <div className="poster__image">
                            <Image src="/img/poster.png" width={807} height={700} alt="Кофе" />
                        </div>
                    </div>
                </Container>
            </section>
    )
}

export default Poster;
