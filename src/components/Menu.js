import { useEffect } from "react";
const Menu = () => {

    useEffect ( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            ""
        );
        const json = await data.json();
        console.log(json);
    }
    
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