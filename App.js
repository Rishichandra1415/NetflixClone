import React from "react";
import "./app.scss";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return ( <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > } > { " " } <
        /Route>{" "} <
        /Routes>{" "} <
        /Router>
    );
}

export default App;