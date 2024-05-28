import Link from "next/link";
import Container from "../../elements/container/container";
import Navbar from "../../elements/navbar/navbar";
import Image from "next/image";
import NavIcons from "../../elements/navbar/navicons";
import './header.css';

const Header = () => {
    return(
        <header className="header">
            <Container className="header__container">
                <div className="header__logo">
                    <Link href={'/'}>
                        <Image src="/img/logo.png" width={260} height={116} alt="Millor" />
                    </Link>
                </div>
                <Navbar/>
                <NavIcons/>
            </Container>
        </header>
    )
}

export default Header;