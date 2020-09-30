import { listen, getRoute, replaceRoute } from "history";

import Home from "pages/Home";
import Blocks from "pages/Blocks";
import Block from "pages/Block";
import Transaction from "pages/Transaction";
import Name from "pages/Name";
import ListExpensive from "pages/ListExpensive";
import Mempool from "pages/Mempool";
import SearchResult from "pages/SearchResult";

import NotFound from "components/NotFound";
import Link from "components/Link";

import "./App.css";

const App: React.FC = () => {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => listen(() => setRoute(getRoute())), []);

  return (
    <>
      <header styleName="header">
        <div styleName="wrapper">
          <Link route={{ id: "home", params: {} }}>
            <h1 styleName="home">
              <span>{"handshake\nnetwork"}</span>
            </h1>
          </Link>
          <nav styleName="menu">
            <ul>
            <li>
              <Link route={{ id: "blocks", params: { page: 0 } }}>
                Blocks
              </Link>
            </li>
              <li>
                <Link
                  route={{ id: "mempool", params: { page: 0 } }}
                >
                  Mempool
                </Link>
              </li>
            </ul>
          </nav>
          <form
            styleName="search"
            onSubmit={(e) => {
              const query = (e.target as any).search.value.replace(/\s/g, "");
              if (query) {
                (e.target as any).search.value = "";
                replaceRoute({
                  id: "search",
                  params: {
                    query,
                  },
                });
              }
              e.preventDefault();
            }}
          >
            <input name="search" />
            <button role="submit">Search</button>
          </form>
        </div>
      </header>
      <main styleName="main">
        <div styleName="wrapper">
          {route === undefined ? (
            <NotFound />
          ) : (
          (route.id === "home" && <Blocks {...{page:0}} />) ||
            (route.id === "blocks" && <Blocks {...route.params} />) ||
            (route.id === "block" && <Block {...route.params} />) ||
            (route.id === "transaction" && <Transaction {...route.params} />) ||
            (route.id === "name" && <Name {...route.params} />) ||
            (route.id === "search" && <SearchResult {...route.params} />) ||
            (route.id === "mempool" && <Mempool {...route.params} />)
          )}
        </div>
      </main>
      <footer styleName="footer">
        <div styleName="wrapper">
          <div styleName="copyright"> &copy; 2020</div>
        </div>
      </footer>
    </>
  );
};
export default App;
