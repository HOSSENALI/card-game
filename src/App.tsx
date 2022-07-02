import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import About from "./components/views/About";
import Welcome from "./components/views/Welcome";
import Home from "./Home/Home";


const App = () => {
  
  return (
    <div className="app">
      <Home/>
    </div>
  );
};

export default App;
