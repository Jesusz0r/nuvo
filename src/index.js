import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<h1>Home</h1>} />
          <Route path="/shipment/:id" element={<h1>Shipment</h1>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
