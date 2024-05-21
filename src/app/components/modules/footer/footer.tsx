import Link from "next/link";
import Container from "../../elements/container/container";
import Navbar from "../../elements/navbar/navbar";
import Image from "next/image";
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <Container className="footer__container">
                <div className="footer__logo">
                    <Link href={'/'}>
                        <Image src="/img/logo.png" width={260} height={116} alt="Millor" />
                    </Link>
                </div>
                <Navbar></Navbar>
            </Container>
        </footer>
    )
}

export default Footer;