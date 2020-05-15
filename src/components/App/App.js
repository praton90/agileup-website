import React from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "../Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
}

export default App;
