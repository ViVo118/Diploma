import { doMapForNavList } from "../../../../../utils/functions";
import { navigationProps } from "@/app/constants/componentsConsts/componentsConsts";
import './navbar.css';


const Navbar = () => {
    return(
        <nav className="nav">
            <ul className="nav__list">
                {doMapForNavList(navigationProps)}
            </ul>
        </nav>
    )
}

export default Navbar