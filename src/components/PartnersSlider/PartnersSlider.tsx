import "./PartnersSlider.scss";
import logo from "../../assets/images/Partners/slider/bitkub-logo-light-trimmed.png.png";

import { useState, useRef, useEffect } from "react";

function PartnersSlider() {
    const regularGapProperty = 30;
    const pages = 3;
    const sliderWrapperRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const prevPage = () => {
        setCurrentPage((prev) => (prev <= 0 ? prev : prev - 1));
    };
    const nextPage = () => {
        setCurrentPage((prev) => (prev >= pages - 1 ? prev : prev + 1));
    };

    useEffect(() => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.style.transform = `translateX(calc(-${
                currentPage * 100
            }% - ${currentPage * regularGapProperty}px))`;
        }
    }, [currentPage]);

    return (
        <div className="partners-slider-container flex flex-col items-center">
            <div className="partners-slider-container__navigation">
                <button onClick={prevPage} className="navigation__arrow">
                    <div className="arrow__a"></div>
                </button>
                <button onClick={nextPage} className="navigation__arrow">
                    <div className="arrow__a"></div>
                </button>
            </div>
            <div className="partners-slider-container__content flex">
                <div ref={sliderWrapperRef} className="content__wrapper flex">
                    <div className={`wrapper__page`}>
                        <p>
                            Since 2019, Space team has been an astounding market
                            maker for Bitkub. They have proven themselves to be
                            one of the most consistent, committed and driven
                            market makers on our exchange. Gravity Team has
                            contributed high-quality volume and has proven to be
                            very reliable and trustworthy partner. We strongly
                            advocate Gravity Team as they have been an
                            indispensable part of our market-making team.
                        </p>
                        <p>Rayhan Duran</p>
                        <div className="page__description">
                            <p>Co-founder & CEO of Bitkub</p>
                            <img src={logo} />
                        </div>
                    </div>
                    <div className={`wrapper__page`}>
                        <p>
                            Since 2019, Space team has been an astounding market
                            maker for Bitkub. They have proven themselves to be
                            one of the most consistent, committed and driven
                            market makers on our exchange. Gravity Team has
                            contributed high-quality volume and has proven to be
                            very reliable and trustworthy partner. We strongly
                            advocate Gravity Team as they have been an
                            indispensable part of our market-making team.
                        </p>
                        <p>Rayhan Duran</p>
                        <div className="page__description">
                            <p>Co-founder & CEO of Bitkub</p>
                            <img src={logo} />
                        </div>
                    </div>
                    <div className={`wrapper__page`}>
                        <p>
                            Since 2019, Space team has been an astounding market
                            maker for Bitkub. They have proven themselves to be
                            one of the most consistent, committed and driven
                            market makers on our exchange. Gravity Team has
                            contributed high-quality volume and has proven to be
                            very reliable and trustworthy partner. We strongly
                            advocate Gravity Team as they have been an
                            indispensable part of our market-making team.
                        </p>
                        <p>Rayhan Duran</p>
                        <div className="page__description">
                            <p>Co-founder & CEO of Bitkub</p>
                            <img src={logo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners-slider-container__dots flex ">
                {[...Array(pages)].map((_, i) => (
                    <div
                        key={i}
                        className={`dots__dot ${
                            currentPage === i && "dots__dot--active"
                        }`}
                        onClick={() => setCurrentPage(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default PartnersSlider;
