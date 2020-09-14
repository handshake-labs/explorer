import { Route, parseLocation } from "./routes";
import { location, listen } from "./history";

import Home from "./pages/Home";
import Block from "./pages/Block";
import NotFound from "./pages/NotFound";

import "./App.css";

const App: React.FC = () => {
  const [route, setRoute] = React.useState<Route | undefined>(
    parseLocation(location())
  );

  React.useEffect(() => listen(() => setRoute(parseLocation(location()))), []);

  return (
    <>
      <header styleName="header">
        <div styleName="wrapper"></div>
      </header>
      <main>
        <div styleName="wrapper">
          {route === undefined ? (
            <NotFound />
          ) : (
            (route.id === "home" && <Home {...route.params} />) ||
            (route.id === "block" && <Block {...route.params} />)
          )}
        </div>
      </main>
      <footer>
        <div styleName="wrapper"></div>
      </footer>
    </>
  );
};
export default App;
