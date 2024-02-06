import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img className="logoImg"
                    src="https://images-platform.99static.com/ydocSZMPbCuCOxA5hNQLJLs10jY=/500x500/top/smart/99designs-contests-attachments/2/2478/attachment_2478256"
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