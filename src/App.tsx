import { getRoute, listen } from "./history";

import Home from "./pages/Home";
import Block from "./pages/Block";
import Transaction from "./pages/Transaction";
import Name from "./pages/Name";
import ListExpensive from "./pages/ListExpensive";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Mempool from "./pages/Mempool";

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
            (route.id === "block" && <Block {...route.params} />) ||
            (route.id === "transaction" && <Transaction {...route.params} />) ||
            (route.id === "name" && <Name {...route.params} />) ||
            (route.id === "listExpensive" && <ListExpensive {...route.params} />) ||
            (route.id === "search" && <Search {...route.params} />) ||
            (route.id === "mempool" && <Mempool {...route.params} />)
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
