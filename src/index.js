import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AppWrapper from "./components/AppWrapper";

// Pages
import Home from "./pages/home";
import Shipment from "./pages/shipment";

// Components
import Nav from "./components/Nav";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', Arial, Verdana, sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Nav />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/shipment/:id" element={<Shipment />} />
          </Route>
        </Routes>
      </AppWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
