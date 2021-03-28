import * as React from "react";
import { Link, graphql } from "gatsby";


import FadeIn from "../components/fadeIn";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/layout";

// markup
const IndexPage = ({  location }) => {
    const siteTitle =  `Title`;

    return (
        <>
            <Head />
            <Layout location={location} title={siteTitle}>
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
            </Layout>
        </>
    );
};

export default IndexPage;