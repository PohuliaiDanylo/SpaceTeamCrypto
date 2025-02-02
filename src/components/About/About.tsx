import "./About.scss";

function About() {
    return (
        <div
            id="about us"
            className="about-container flex flex-col items-center text-center"
        >
            <h1>About Space Team</h1>
            <p>
                At Space Team, we are on the mission to balance the supply and
                demand across crypto markets worldwide. We are a crypto native
                market maker founded by traders, developers, and innovators who
                are strong believers and supporters of the future of
                decentralization and digital assets.
            </p>
            <div className="about-container__table flex flex-wrap">
                <div className="table__element">
                    <h2>~$100 billion</h2>
                    <p>cumulative trading volume to date</p>
                </div>
                <div className="table__element">
                    <h2>0.8%</h2>
                    <p>of the global crypto spot trading volume</p>
                </div>
                <div className="table__element">
                    <h2>~30</h2>
                    <p>Gravity Teammates (& growing)</p>
                </div>
                <div className="table__element">
                    <h2>25+</h2>
                    <p>leading global and local crypto exchanges</p>
                </div>
                <div className="table__element">
                    <h2>2017</h2>
                    <p>start, crypto-natives</p>
                </div>
                <div className="table__element">
                    <h2>1,200+</h2>
                    <p>crypto-asset pairs</p>
                </div>
                <div className="table__element">
                    <h2>24/7</h2>
                    <p>liquidity</p>
                </div>
                <div className="table__element">
                    <h2>5 billion+</h2>
                    <p>trades done to date</p>
                </div>
            </div>
        </div>
    );
}

export default About;
