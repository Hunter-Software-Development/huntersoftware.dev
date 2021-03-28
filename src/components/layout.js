import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

const height100 = {
    height: "92%",
};

const Layout = ({ location, title, children }) => {
    return (
        <>
            <Header />
            <main style={height100}>
                <div className={"container"} style={height100}>
                    <div className={"row"} style={height100}>
                        <div className={"col align-self-center"}>{children}</div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
