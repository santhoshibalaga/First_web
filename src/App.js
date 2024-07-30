import React from "react";

import Home from "./components/home.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import {Routes,Route } from "react-router-dom";
import Navar from "./components/navbar.js";
import Action from "./components/action.js";
import Register from "./components/register.js";
import Another from "./components/another-action.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Seperate from "./components/seperate.js";
function App() {
  return (
    <div>
      <Navar/>
      <Home/>
      <Register/>
      <About/>
      <Action/>
      <Another/>
      <Seperate/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
