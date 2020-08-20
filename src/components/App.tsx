import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Block from "./pages/Block";

const App: React.FC = () => (
  <BrowserRouter>
    <header elem="header">
      <NavLink to="/">LOGO</NavLink>
      <nav>
        <NavLink to="/block">Blocks</NavLink>
      </nav>
    </header>
    <Route path="/" component={Home} exact />
    <Route path="/blocks/:height" component={Block} exact />
  </BrowserRouter>
);
export default App;
