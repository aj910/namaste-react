import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
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

                </ul>
            </div>
        </div>
    )
}

export default Header;