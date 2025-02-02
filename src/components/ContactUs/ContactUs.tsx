import "./ContactUs.scss";
import Link from "../Link/Link";
import Button from "../Button/Button";

import { useState, useEffect } from "react";

function ContactUs() {
    const [linkLabel, setLinkLabel] = useState(
        "Learn more about working with us"
    );

    useEffect(() => {
        const updateLabel = () => {
            if (window.innerWidth < 450) {
                setLinkLabel("Learn more");
            } else {
                setLinkLabel("Learn more about working with us");
            }
        };

        updateLabel();

        window.addEventListener("resize", updateLabel);

        return () => window.removeEventListener("resize", updateLabel);
    }, []);

    return (
        <div className="contact-us-container">
            <div className="contact-us-container__join-us flex justify-between">
                <h1>
                    Join <span>Gravity Team</span>
                </h1>
                <div className="join-us__info flex flex-col">
                    <p>
                        Join our community of innovators, problem solvers and
                        owners who apply scientific discovery techniques to make
                        crypto markets a better place for everyone.
                    </p>
                    <p>
                        As we emphasize it in our name – Gravity Team, we are a
                        team. A team of bright, talented people, each masters of
                        their specialty, curious about the world and eager to
                        solve the new exciting cryptocurrency market problems,
                        build cool stuff and have fun whilst doing so!
                    </p>
                    <Link
                        label={linkLabel}
                        style="secondary"
                        arrow={true}
                    ></Link>
                </div>
            </div>
            <div className="contact-us-container__contact flex flex-col items-center">
                <h1>Contact Us</h1>
                <p>
                    We are always open to discuss new value-adding partnerships.
                    Do reach out if you are an exchange or a project looking for
                    liquidity; an algorithmic trader or a software developer
                    looking to improve the markets with us or just have a great
                    idea you can’t wait to share with us!
                </p>
                <Button label="GET IN TOUCH" style="primary" />
            </div>
        </div>
    );
}

export default ContactUs;
