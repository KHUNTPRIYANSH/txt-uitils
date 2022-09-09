import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  const [mode, setMode] = useState("dark");
  let changeMode = () => {
    console.log("Theme Changed");
    if (mode == "dark") setMode("light");
    else setMode("dark");
  };
  return (
    <>
      <div className={`App ${mode}`}>
        <Router>
          <Navbar mode={mode} changeMode={changeMode} />
          <Routes>
            <Route exact path="/" element={<InputBox />} />
            <Route exact path="about/*" element={<About />} />
            <Route exact path="contact/*" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
