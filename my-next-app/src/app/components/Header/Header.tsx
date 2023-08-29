import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
    return (
        <div className="header-wraaper">
            <div className="header-logo">FICOS</div>
            <div className="open-pane">
                <img src="/icons/icon_menu.svg" alt="menu"/>
            </div>
        </div>
    )
}

export default Header;