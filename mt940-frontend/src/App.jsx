import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./paths/Home";
import Update from "./paths/Update";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <Link to="/all-records">Home Page</Link>
            <Link to="/update">Update Page</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/all-records" element={<Home />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
