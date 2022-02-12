import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', Arial, Verdana, sans-serif;
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
