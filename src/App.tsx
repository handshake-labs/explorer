import React from "react";
import { useHistoryPathname } from "./hooks/history";
import { matchPathname } from "./routes";

import Home from "./pages/Home";
import Block from "./pages/Block";
import NotFound from "./pages/NotFound";

import "./App.css";

const App: React.FC = () => {
  const pathname = useHistoryPathname();
  const match = matchPathname(pathname) || { id: undefined }

  return (
    <>
      <header styleName="header">
        <div styleName="wrapper"></div>
      </header>
      <main>
        <div styleName="wrapper">
          {
            match.id === "home" && <Home {...match.params}/> ||
            match.id === "block" && <Block {...match.params}/> ||
            <NotFound/>
          }
        </div>
      </main>
      <footer>
        <div styleName="wrapper"></div>
      </footer>
    </>
  );
};
export default App;
