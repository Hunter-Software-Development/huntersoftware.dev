import * as React from "react";
import { Helmet } from "react-helmet";

import logo from "../images/icon.png";

const Head = () => {
    return (
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Hunter Software Development</title>
            <meta name="title" content="Hunter Software Development" />
            <meta name="description" content="Affordable Web Development in Greenville, SC" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://huntersoftware.dev/" />
            <meta property="og:title" content="Hunter Software Development" />
            <meta property="og:description" content="Affordable Web Development in Greenville, SC" />
            <meta property="og:image" content={logo} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://huntersoftware.dev/" />
            <meta property="twitter:title" content="Hunter Software Development" />
            <meta property="twitter:description" content="Affordable Web Development in Greenville, SC" />
            <meta property="twitter:image" content={logo} />
        </Helmet>
    );
};
export default Head;
