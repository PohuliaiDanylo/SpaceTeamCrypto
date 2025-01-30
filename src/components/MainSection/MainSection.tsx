import "./MainSection.scss";

import Button from "../Button/Button";

function MainSection() {
    return (
        <div className="mainSection-container flex flex-col items-center text-center">
            <h1>Balancing Crypto Markets</h1>
            <p>
                Our fully automated proprietary quantitative trading software
                provides 24/7 liquidity to 170+ crypto assets across 25+
                centralized spot and derivative crypto exchanges.
            </p>
            <Button label="Get in touch" style="primary" />
        </div>
    );
}

export default MainSection;
