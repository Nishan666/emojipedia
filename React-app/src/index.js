import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
<ScrollToTop />
<App />
</BrowserRouter>
, document.getElementById("root"));
