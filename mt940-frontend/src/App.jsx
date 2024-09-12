import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./paths/Home";
import Page1 from "./paths/Page1";
import Page2 from "./paths/Page2";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <Link to="/all-records">Home Page</Link>
            <Link to="/update">Update Page</Link>
            <Link to="/filter">Filter Page</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/all-records" element={<Home />} />
            <Route path="/update" element={<Page1 />} />
            <Route path="/filter" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
