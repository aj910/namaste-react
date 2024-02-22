import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header-container">
            <div className="logo">
                <img className="logoImg"
                    src={LOGO_URL}
                    alt="food logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Cart</a></li>
                    <li><a>Contact Us</a></li>
                   <button className="loginBtn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;