import { doMapForNavList } from "../../../../../utils/functions";
import { navigationIconsProps } from "@/app/constants/componentsConsts/componentsConsts";
import CartIcon from "../../modules/cart/cartIcon";
import './navbar.css';

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