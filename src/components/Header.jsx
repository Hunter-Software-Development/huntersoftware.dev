import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import logo from "../images/icon.png";

const Footer = () => {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" height="32" width="32" style={{ verticalAlign: "middle" }} />
                        <span className="mx-3" style={{ verticalAlign: "middle" }}>
                            Hunter Software
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar collapse navbar-collapse justify-content-end" id="navbar">
                        <div className="navbar-nav">
                            <Link to="/" itemProp="url" className="nav-link" activeClassName="active">
                                Home
                            </Link>
                            <Link to="/blog" itemProp="url" className="nav-link" activeClassName="active">
                                Blog
                            </Link>
                            <Link to="/about" itemProp="url" className="nav-link" activeClassName="active">
                                About
                            </Link>
                            <Link to="/pricing" itemProp="url" className="nav-link disabled" activeClassName="active">
                                Pricing
                            </Link>
                            <Link to="/why" itemProp="url" className="nav-link" activeClassName="active">
                                Why
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Footer;
