import React from "react";
import ReactDOM from "react-dom";

const jsxHeading = <h1>Hello world form HTML/JSX</h1>


// const heading = React.createElement("h1",{id:"heading"},"Hello world form HTML");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxHeading)