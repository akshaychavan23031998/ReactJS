import { useState } from "react";

const Header = () => {
    const [btnName, setbtnName]= useState("Login");
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
                    <button className="Login" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        // console.log({btnName});
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;