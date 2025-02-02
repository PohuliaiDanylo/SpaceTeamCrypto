import "./Header.scss";
import logo from "../../assets/images/logo.png";
import Link from "../Link/Link";
import Button from "../Button/Button";

import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropDownClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className={`header-container flex items-center justify-between ${
                isMenuOpen && "header-container--menu-active"
            }`}
        >
            <div className="header-container__logo">
                <img src={logo} alt="company logo" />
            </div>
            <ul
                className={`header-container__links flex ${
                    isMenuOpen && "header-container__links-mobile--active"
                }`}
            >
                <li>
                    <Link label="ABOUT US" style="primary" linkTo="#about us" />
                </li>
                <li>
                    <Link
                        label="OUR SERVICES"
                        style="primary"
                        linkTo="#our services"
                    />
                </li>
                <li>
                    <Link
                        label="WORK WITH US"
                        style="primary"
                        linkTo="#work with us"
                    />
                </li>
                <li>
                    <Link label="BLOG" style="primary" linkTo="#blog" />
                </li>
            </ul>
            <div
                className={`header-container__touch  ${
                    isMenuOpen && "header-container__touch-mobile--active"
                }`}
            >
                <Button label="GET IN TOUCH" style="secondary"></Button>
            </div>
            <button
                onClick={dropDownClick}
                className={`header-container__drop-down ${
                    isMenuOpen && "header-container__drop-down--active"
                }`}
            >
                <div></div>
            </button>
        </div>
    );
}
export default Header;
