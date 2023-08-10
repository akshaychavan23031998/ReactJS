import React from 'react';
import ReactDOM, { render } from 'react-dom';

/*
Low Level Component Design:- 
Food App
    -Header
        -Logo
        -Nav Bar
    -Body
        -Search Barc
        -Restorent Container
            - Restorent Cards
    -Footer
        -CopyRight
        -Links
        -Address
        -Contact
*/


const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256'  />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Contact Us </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    // console.log(props);
    return (
        <div className='res-card'>
            <h3> {props.resto} </h3>
            <img className='food-img' src='https://b.zmtcdn.com/data/dish_photos/274/aff4a71d82db51982138730919622274.png' />
            <h4> {props.dish} </h4>
            <h4> {props.stars} </h4>
            <h4> {props.time} </h4>
        </div>
    );
};



const Body = () => {
    return (
        <div className='body'>
            <div className='search'> Search </div>
            <div className='res-container'> 
                <RestaurantCard resto="Meghana Foods" dish="Biryani" stars="4.2" time="32 mins"/>
                <RestaurantCard resto="KFC" dish="Burger" stars="4.6" time="24 mins"/>
                <RestaurantCard resto="BurgerKing" dish="NonVeg-Burger" stars="4.0" time="44 mins"/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


