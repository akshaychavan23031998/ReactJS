import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setbtnName]= useState("Login");

    useEffect(() => {
        console.log("No Empty Array");
    }, [btnName]);

    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256'  />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> 
                        <Link to="/"> Home </Link> 
                    </li>
                    <li> 
                        <Link to="/about"> About Us </Link>      
                    </li>
                    <li> 
                        <Link to="/contactus"> Contact Us </Link> 
                    </li>

                    {/* i can use <a> </a> i.e anchor tag over the Link tag but anchor tag will refresh my complte page 
                    when ever i click on any button i.e ome, about, contact us and etc. */}
                    
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