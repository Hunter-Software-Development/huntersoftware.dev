import * as React from "react";

const height100 = {
    height: "100%",
};

// markup
const IndexPage = () => {
    return (
        <>
            <div className={"container"} style={height100}>
                <div className={"row"} style={height100}>
                    <div className={"col align-self-center"}>
                        <h1>Hunter Software Development</h1>
                        <h4>Boutique Web Development in Greenville, South Carolina <span role="img" aria-label="pin">📍</span></h4>
                        <p>Coming soon...</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexPage;
