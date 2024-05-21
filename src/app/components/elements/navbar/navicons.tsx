import { doMapForNavList } from "../../../../../utils/functions";
import { navigationIconsProps } from "@/app/constants/componentsConsts/componentsConsts";
import './navbar.css';

    const NavIcons = () => {
        return(
            <nav className="nav">
                <ul className="nav__list">
                    {doMapForNavList(navigationIconsProps)}
                </ul>
            </nav>
        )
    }

    export default NavIcons