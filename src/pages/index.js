import * as React from "react";
import FadeIn from "../components/fadeIn";
import Head from "../components/Head";
import { StaticImage } from "gatsby-plugin-image";

const height100 = {
    height: "100%",
};

// markup
const IndexPage = () => {
    return (
        <>
            <Head />
            <main style={height100}>
                <div className={"container"} style={height100}>
                    <div className={"row"} style={height100}>
                        <div className={"col align-self-center"}>
                            <FadeIn delay={100} duration={1000}>
                                <h1>Hunter Software Development</h1>
                                <h4>
                                    A Boutique Web Development Agency in Greenville, South Carolina
                                    <span role="img" aria-label="pin">
                                        📍
                                    </span>
                                </h4>
                                <p>Coming soon...</p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer py-2 bg-light fixed-bottom">
                <div className="container">
                    <div className={"row"}>
                        <div className={"col text-center"}>
                            <span className={"text-muted"}>© Hunter Software Development LLC</span>
                        </div>

                        <div className={"col text-center text-muted"}>
                            <a className={"text-reset"} href="tel:+1-864-214-5880" target={"_blank"} rel={"noreferrer"}>
                                864-214-5880
                            </a>
                        </div>
                        <div className={"col text-center text-muted"}>
                            <a className={"text-reset float-end"} href="mailto:huntersoftwaredevelopment@gmail.com" target={"_blank"} rel={"noreferrer"}>
                                huntersoftwaredevelopment@gmail.com
                            </a>
                        </div>
                        <div className={"col text-center"}>
                            <a href={"https://www.linkedin.com/company/hunter-software-development"} target={"_blank"} rel={"noreferrer"}>
                                <StaticImage src={"../images/socialIcons/linkedin.png"} alt={"linkedin"} width={16} height={16} style={{ verticalAlign: "middle" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default IndexPage;
