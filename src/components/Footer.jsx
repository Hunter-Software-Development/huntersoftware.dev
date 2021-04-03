import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import linkedinLogo from "../images/socialIcons/linkedin.png";

const Footer = () => {
    return (
        <footer className="footer py-2 bg-light fixed-bottom border-top">
            <div className="container">
                <div className={"row"}>
                    <div className={"col-xxl text-center"}>
                        <span className={"text-muted"}>© Hunter Software Development LLC</span>
                    </div>

                    <div className={"col-xxl text-center text-muted"}>
                        <a className={"text-reset"} href="tel:+1-864-214-5880" target={"_blank"} rel={"noreferrer"}>
                            864-214-5880
                        </a>
                    </div>
                    <div className={"col-xxl text-center text-muted"}>
                        <a className={"text-reset"} href="mailto:huntersoftwaredevelopment@gmail.com" target={"_blank"} rel={"noreferrer"}>
                            huntersoftwaredevelopment@gmail.com
                        </a>
                    </div>
                    <div className={"col-xxl text-center"}>
                        <a href={"https://www.linkedin.com/company/hunter-software-development"} target={"_blank"} rel={"noreferrer"}>
                            <img src={linkedinLogo} alt={"linkedin"} width={16} height={16} style={{ verticalAlign: "middle" }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
