import { Link } from 'react-router-dom';
import style from './index.module.css'
import { useIsMobile } from "../../hooks/useMobile";
import DesktopMenu from './DesktopMenu';
import logo from '../../images/logo.png'
import MobileMenu from './MobileMenu';



const Header = () => {
    const isMobile = useIsMobile()

    return ( 
        <header>
            <div className={style.container}>
                <Link to="/Jelly-Belly" className={style.logo}>
                    <img src={logo} alt="Jelly Belly" />
                    <span>Jelly Belly</span>
                </Link>
                
            {isMobile ? (<MobileMenu />) : (<DesktopMenu />)}
            </div>
        </header>
     );
}
 
export default Header;