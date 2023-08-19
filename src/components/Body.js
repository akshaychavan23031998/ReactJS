import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () => {
    let[reslist, setreslist] = useState([
        {resto:"Meghana Foods", dish:"Biryani", stars:"4.2", time:"32 mins"},
        {resto:"KFC", dish:"Burger", stars:"4.6", time:"24 mins"},
        {resto:"BurgerKing", dish:"NonVeg-Burgr", stars:"3.0", time:"44 mins"}
    ]);
    
    const [searchText, setsearchText] = useState("");
    console.log("Header Rendered");

    useEffect( () => {
        console.log("Use Effect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=17.6599188&lng=75.9063906"
        );
        const json = await data.json();
        console.log(json);
    };

    const OnlineStatus = useOnlineStatus();
    if (OnlineStatus === false) return <h1> Your Offline </h1>

//conditional rendering:- rendering a component on the basis of the condition called conditional rendering.
    if(reslist.length === 0) {
        return <Shimmer/>;
    }

//turnory operator:- 
// return if(reslist.length === 0) ? <Shimmer/> : (     ;
    return (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}/>

                    <button className="btn-search" onClick={() => {
                        //filter the reasorent card and update the UI
                        //search text
                        console.log(searchText);

                        const filteredresto = reslist.filter((resto) => resto.includes(searchText)
                        );
                        setreslist(filteredresto);

                    }}> Search </button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = reslist.filter(
                        (res) => res.stars > 4.5
                    );
                    console.log(filteredList);
                    setreslist(filteredList);
                    // console.log('Filtered');
                    reslist = reslist.filter(
                        (res) => res.stars > 4.0
                    );
                    console.log(reslist);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            
            <div className='res-container'> 
                <RestaurantCard resto="Meghana Foods" dish="veg-Biryani" stars="4.2" time="32 mins"/>
                <RestaurantCard resto="KFC" dish="Burger" stars="4.6" time="24 mins"/>
                <RestaurantCard resto="BurgerKing" dish="NonVeg-Burger" stars="3.0" time="44 mins"/>
                <RestaurantCard resto="Akshay Foods" dish="chicken-Biryani" stars="4.3" time="26 mins"/>
                <RestaurantCard resto="ARC" dish="veg-Burger" stars="4.6" time="24 mins"/>
                <RestaurantCard resto="King" dish="NonVeg-Burger" stars="3.0" time="44 mins"/>
            </div>
        </div>
    );
};

export default Body;