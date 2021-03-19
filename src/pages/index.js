import * as React from "react";
import FadeIn from "../components/fadeIn";
import { Helmet } from "react-helmet";

const height100 = {
    height: "100%",
};

// markup
const IndexPage = () => {
    return (
        <>
            <Helmet>
                <title>Hunter Software Development</title>
            </Helmet>
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
        </>
    );
};

export default IndexPage;
