import React from "react";
import "./index.css"
import Home from "./routes/home"
import Projects from "./routes/projects.js";
import Contacts from "./routes/contacts.js";
import { Route, Routes } from  "react-router-dom";
function App() {
  return (
    
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/contacts" element = {<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
