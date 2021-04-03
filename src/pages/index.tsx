import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FadeIn from "../components/fadeIn";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// markup
const IndexPage = ({ location }) => {
    const siteTitle = "Home";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={siteTitle} />
            <FadeIn delay={100} duration={1000}>
                <h1>Hunter Software Development</h1>
                <h2 style={{fontSize: "24px"}}>
                    A Boutique Web Development Agency in Greenville, South Carolina
                    <span role="img" aria-label="pin">
                        📍
                    </span>
                </h2>
                <p>Coming soon...</p>
            </FadeIn>
        </Layout>
    );
};

export default IndexPage;
