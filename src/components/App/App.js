import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Blog from "../Blog/Blog";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Blog />
      </div>
    </HashRouter>
  );
}

export default App;
