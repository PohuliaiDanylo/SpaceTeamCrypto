import "./Partners.scss";

import decoration1 from "../../assets/images/Partners/decoration/img1.png";
import decoration2 from "../../assets/images/Partners/decoration/img2.png";
import decoration3 from "../../assets/images/Partners/decoration/img3.png";

import partner1 from "../../assets/images/Partners/partners/img1.png";
import partner2 from "../../assets/images/Partners/partners/img2.png";
import partner3 from "../../assets/images/Partners/partners/img3.png";
import partner4 from "../../assets/images/Partners/partners/img4.png";
import partner5 from "../../assets/images/Partners/partners/img5.png";
import partner6 from "../../assets/images/Partners/partners/img6.png";

function Partners() {
    return (
        <div className="partners-container">
            <div className="partners-container__decoration">
                <img src={decoration1} alt="decoration" />
                <img src={decoration2} alt="decoration" />
                <img src={decoration3} alt="decoration" />
            </div>
            <div className="partners-container__our-partners flex items-center justify-between">
                <h1 className="out-partners__header">Our Partners & Friends</h1>
                <div className="out-partners__partners flex">
                    <div className="partners__column">
                        <div className="column__el">
                            <img src={partner1} alt="partner image" />
                            <p>bithumb</p>
                        </div>
                        <div className="column__el">
                            <img src={partner2} alt="partner image" />
                            <p>bitbank</p>
                        </div>
                        <div className="column__el">
                            <img src={partner3} alt="partner image" />
                            <p>Binance</p>
                        </div>
                    </div>
                    <div className="partners__column">
                        <div className="column__el">
                            <img src={partner4} alt="partner image" />
                            <p>bitstamp</p>
                        </div>
                        <div className="column__el">
                            <img src={partner5} alt="partner image" />
                            <p>coinbase</p>
                        </div>
                        <div className="column__el">
                            <img src={partner6} alt="partner image" />
                            <p>bitfinex</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners-container__about-partnerships"></div>
        </div>
    );
}

export default Partners;
