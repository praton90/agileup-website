import React from "react";
import { HashRouter } from "react-router-dom";

import Blog from "../Blog/Blog";

function App() {
  return (
    <HashRouter basename="/">
      <Blog />
    </HashRouter>
  );
}

export default App;
