import * as React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

// markup
const IndexPage = ({ location }) => {
    const siteTitle = "Home";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={siteTitle} />
            <div className="row">
                <div className="col-lg align-self-center">
                    <p>
                        Hi there
                        <span role="img" aria-label="wave">
                            👋
                        </span>
                    </p>
                    <p>I'm Andrew Hunter.</p>
                    <p>I was raised in Charleston, graduated from Clemson, and have spent the last few years living and working in Greenville.</p>
                    <p>I founded Hunter Software Development on the premise of providing simple, affordable, high-performing, quality websites to small businesses and non-profits.</p>
                    <p>
                        By using{" "}
                        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
                            Gatsby
                        </a>{" "}
                        and{" "}
                        <a href="https://www.netlifycms.org/" target="_blank" rel="noreferrer">
                            Netlify CMS
                        </a>{" "}
                        we are able to provide quality without having to deal with the bloat that most WordPress sites come with. More on that{" "}
                        <Link to="/why" className="disabled">
                            here
                        </Link>
                        .
                    </p>
                </div>

                <div className="col-lg text-white text-end px-0">
                    <div className=" card bg-light">
                        <StaticImage src={"../images/aboutHero.jpg"} class="card-img" alt="About" placeholder="blurred" />
                        <div className="card-img-overlay">
                            <h1 className="card-title">About</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
