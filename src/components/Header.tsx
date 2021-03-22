import * as React from "react";

import logo from "../images/icon.png";

const Footer = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top border-bottom shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="24" height="24" style={{ verticalAlign: "middle" }} />
                        <span className="mx-3" style={{ verticalAlign: "middle" }}>Hunter Software Development</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar collapse navbar-collapse justify-content-end" id="navbar">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                            <a className="nav-link disabled" href="#">
                                About
                            </a>
                            <a className="nav-link disabled" href="#">
                                Pricing
                            </a>
                            <a className="nav-link disabled" href="#">
                                Why
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Footer;
