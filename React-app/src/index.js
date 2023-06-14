import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
    // process.env.PUBLIC_URL -> used while hosting
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* for Scroll the screen back to to  after any changes*/}
        <ScrollToTop />
        <App />
    </BrowserRouter>
    , document.getElementById("root"));
