import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// js file
import Home from "./components/pages/home";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Nav/><Home/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
