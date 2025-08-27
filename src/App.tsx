import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
