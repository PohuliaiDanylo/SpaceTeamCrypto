import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import Link from "../Link/Link";

function Footer() {
    return (
        <div className="footer-container flex flex-col">
            <div className="footer-container__links flex justify-between">
                <div className="links__links">
                    <h3>SPACE TEAM</h3>
                    <ul className="flex flex-col">
                        <li>
                            <Link
                                label="About Us"
                                style="primary"
                                linkTo="#about us"
                            ></Link>
                        </li>
                        <li>
                            <Link
                                label="Work with Us"
                                style="primary"
                                linkTo="#work with us"
                            ></Link>
                        </li>
                    </ul>
                </div>
                <div className="links__logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="footer-container__rights flex justify-between">
                <p>Terms of Use & Privacy Policy</p>
                <p>©2022 Space Team. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
