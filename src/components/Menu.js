import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Menu = () => {
    
    const  {resId} = useParams();
    const resInfo = useResMenu(resId);  //custom hooks
    return (
        <div className="menu">
            <h1> Name of Restaurant </h1>
            <h2> Menu </h2>
            <ul>
                <li> Biryani </li>
                <li> Matan Kabab  </li>
                <li> Tandurii Rotti  </li>
                <li> Coffe </li>
                <li> Juice </li>
            </ul>
        </div>
    );
};

export default Menu;