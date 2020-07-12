import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <Auth />
    </Router>
  );
}

export default App;
