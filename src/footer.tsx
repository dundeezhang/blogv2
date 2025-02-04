import { useMediaQuery } from "react-responsive";

import uwcsWrBlack from "/icons/blackuwcswebring.svg";
import uwcsWrWhite from "/icons/uwcscwebring.svg";

export default function Footer() {
    const currYear = new Date().getFullYear();
    const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
    return (
        <div>
            <footer className="app-footer">
                <span className="glow">
                    <p className="p-foot">
                        Dundee Zhang {currYear} - All Rights Reserved
                    </p>
                </span>
                <ul className="social-cons">
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/dundeezhang/"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-linkedin-in footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://github.com/dundeezhang"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-github footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://instagram.com/dundeehz"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-instagram footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="mailto:contact@dundeezhang.com"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-regular fa-envelope footer-icons"></i>
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="webring-div">
                    <a
                        className="cs-webring-links"
                        href="https://cs.uwatering.com/#https://dundeezhang.com?nav=prev"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <a
                        href="https://cs.uwatering.com/#https://dundeezhang.com"
                        target="_blank"
                    >
                        <img
                            src={isDarkMode ? uwcsWrWhite : uwcsWrBlack}
                            alt="UWaterloo CS Web Ring"
                            className="cs-webring"
                        />
                    </a>
                    <a
                        className="cs-webring-links"
                        href="https://cs.uwatering.com/#https://dundeezhang.com?nav=next"
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
}
