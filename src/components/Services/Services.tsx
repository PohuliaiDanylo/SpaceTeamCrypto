import "./Services.scss";
import Link from "../Link/Link";

import firstServiceImg1 from "../../assets/images/Service/firstService/img1.png";
import firstServiceImg2 from "../../assets/images/Service/firstService/img2.png";
import firstServiceImg3 from "../../assets/images/Service/firstService/img3.png";
import firstServiceImg4 from "../../assets/images/Service/firstService/img4.png";

import secondServiceImg1 from "../../assets/images/Service/secondService/img1.png";
import secondServiceImg2 from "../../assets/images/Service/secondService/img2.png";
import secondServiceImg3 from "../../assets/images/Service/secondService/img3.png";

function Services() {
    return (
        <div
            id="our services"
            className="services-container flex flex-col items-center"
        >
            <div className="services-container__title flex flex-col items-center">
                <h1>Crypto Market Making</h1>
                <p>
                    We are a global crypto liquidity provider and algorithmic
                    market maker. We trade digital assets listed on Centralized
                    Exchanges in over 15 countries worldwide.
                </p>
            </div>
            <div className="services-container__service">
                <div className="service__text">
                    <h2>Market Making for Crypto Projects</h2>
                    <h3>
                        Accelerate your token’s journey by boosting its
                        liquidity
                    </h3>
                    <p>
                        We invest in building long-term, sustainable
                        relationships and support our projects in their growth
                        journey with our services, industry expertise and
                        network.
                    </p>
                    <Link label="Learn more" style="secondary" arrow={true} />
                </div>
                <div className="service__image service__image-first">
                    <img src={firstServiceImg1} />
                    <img src={firstServiceImg2} />
                    <img src={firstServiceImg3} />
                    <img src={firstServiceImg4} />
                </div>
            </div>
            <div className="services-container__service">
                <div className="service__text">
                    <h2>Market Making for Crypto Exchanges</h2>
                    <h3>
                        Attract more traders and projects with deep order books
                        & liquidity
                    </h3>
                    <p>
                        Our world-class market making services are proven to
                        help local and emerging exchanges win traders and gain
                        market-leading positions of up to 90% market dominance.
                    </p>
                    <Link label="Learn more" style="secondary" arrow={true} />
                </div>
                <div className="service__image service__image-second">
                    <img src={secondServiceImg1} />
                    <img src={secondServiceImg2} />
                    <img src={secondServiceImg3} />
                </div>
            </div>
        </div>
    );
}

export default Services;
