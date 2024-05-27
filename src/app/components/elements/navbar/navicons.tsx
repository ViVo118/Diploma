import { doMapForNavList } from "../../../../../utils/functions";
import { navigationIconsProps } from "@/app/constants/componentsConsts/componentsConsts";
import './navbar.css';
import CartIcon from "../cart/cartIcon";

    const NavIcons = () => {
        return(
            <nav className="nav">
                <ul className="nav__list">
                    {doMapForNavList(navigationIconsProps)}
                    <CartIcon/>
                </ul>
            </nav>
        )
    }

    export default NavIcons