import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AppWrapper from "./components/AppWrapper";

// Pages
import Home from "./pages/home";

// Components
import Nav from "./components/Nav";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', Arial, Verdana, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <AppWrapper>
      <Nav />

      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/shipment/:id" element={<h1>Shipment</h1>} />
          </Route>
        </Routes>
      </Router>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
