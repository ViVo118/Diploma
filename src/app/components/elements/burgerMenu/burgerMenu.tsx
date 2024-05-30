import Navbar from '../navbar/navbar';
import NavIcons from '../navbar/navicons';
import './burgerMenu.css';


const BurgerMenu = () => {

    return (
        <div className="burger-menu"> 
                    <input type="checkbox" id="check" className="checkbox"/>
                    <label htmlFor="check">
                        <div className="lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>

                    </label>
                    <div className="header__toggle-menu">
                        <Navbar/>
                        <NavIcons />
                    </div>
        </div> 
        )
}

export default BurgerMenu