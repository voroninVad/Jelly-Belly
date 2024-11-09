import { Link } from "react-router-dom";
import './index.css'

const DesktopMenu = () => {
    return ( 
        <nav className="menu__desktop">
            <Link to="/Jelly-Belly/beans">Beans</Link>
            <Link to="/Jelly-Belly/facts">Facts</Link>
            <Link to="/Jelly-Belly/recipes">Recipes</Link>
            <Link to="/Jelly-Belly/combinations">Combinations</Link>
            <Link to="/Jelly-Belly/history">History</Link>
            <Link to="/Jelly-Belly/review">Review</Link>
        </nav>
     );
}
 
export default DesktopMenu;