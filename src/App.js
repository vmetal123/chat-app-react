import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Auth}/>
      <Route exact path={'/chat'} component={Chat} />
    </Router>
  );
}

export default App;
