import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    // var reslist = [{resto:"Meghana Foods", dish:"Biryani", stars:"4.2", time:"32 mins"},
    //                 {resto:"KFC", dish:"Burger", stars:"4.6", time:"24 mins"},
    //                 {resto:"BurgerKing", dish:"NonVeg-Burgr", stars:"3.0", time:"44 mins"}];

    let[reslist, setreslist] = useState([
        {resto:"Meghana Foods", dish:"Biryani", stars:"4.2", time:"32 mins"},
        {resto:"KFC", dish:"Burger", stars:"4.6", time:"24 mins"},
        {resto:"BurgerKing", dish:"NonVeg-Burgr", stars:"3.0", time:"44 mins"}
    ]);
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredList = reslist.filter(
                        (res) => res.stars > 4.5
                    );
                    console.log(filteredList);
                    setreslist(filteredList);
                    // console.log('Filtered');
                    // reslist = reslist.filter(
                    //     (res) => res.stars > 4.0
                    // );
                    // console.log(reslist);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'> 
                <RestaurantCard resto="Meghana Foods" dish="Biryani" stars="4.2" time="32 mins"/>
                <RestaurantCard resto="KFC" dish="Burger" stars="4.6" time="24 mins"/>
                <RestaurantCard resto="BurgerKing" dish="NonVeg-Burger" stars="3.0" time="44 mins"/>
            </div>
        </div>
    );
};

export default Body;