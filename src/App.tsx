import { getRoute, listen } from "./history";

import Home from "./pages/Home";
import Block from "./pages/Block";
import NotFound from "./pages/NotFound";

import "./App.css";

const App: React.FC = () => {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => listen(() => setRoute(getRoute())), []);

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
