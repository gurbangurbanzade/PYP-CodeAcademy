import React from "react";
import ReactDOM from "react-dom/client";
import About from "./14-Day-Task/About";
import Contact from "./14-Day-Task/Contact";
import Header from "./14-Day-Task/Header";
import Navbar from "./14-Day-Task/Navbar";
import Project from "./14-Day-Task/Project";
import Location from "./14-Day-Task/Location";

import reportWebVitals from "./reportWebVitals";
import Footer from "./14-Day-Task/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Project />
    <About />
    <Contact />
    <Location />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
