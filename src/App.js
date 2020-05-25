import React, { useState, useEffect } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/pages/home';
import Resume from './components/resume_builder/resume';
import Applications from './components/pages/applications';

import "./design/at.css";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Route exact="true" path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/applications" component={Applications}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
