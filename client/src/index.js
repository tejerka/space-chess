import React from "react";
import ReactDOM from "react-dom";
import Root from "@client/containers/Root";

const render = () => {
    ReactDOM.render(
        <Root />,
        document.getElementById("root")
    );
};

render();
