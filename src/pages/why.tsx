import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

// markup
const IndexPage = ({ location }) => {
    const siteTitle = "Why";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={siteTitle} />
            <div className="row">
                <div className="col align-self-center text-end">
                    <h1>Why</h1>
                    <h2>Hunter Software Development</h2>
                </div>
                <div className="col align-self-center">
                    <p>Coming soon...</p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
