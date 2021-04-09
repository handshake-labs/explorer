import { useState, useEffect } from "preact/hooks";
import { listen, getRoute, replaceRoute } from "history";

import Blocks from "pages/Blocks";
import Block from "pages/Block";
import Transaction from "pages/Transaction";
import Name from "pages/Name";
import Mempool from "pages/Mempool";
import SearchResult from "pages/SearchResult";

import NotFound from "components/NotFound";
import Link from "components/Link";

import "./App.css";

const App: FC = () => {
  const [route, setRoute] = useState(getRoute());
  const [menuShown, setMenuShown] = useState<boolean>(false);

  useEffect(
    () =>
      listen(() => {
        setMenuShown(false);
        setRoute(getRoute());
      }),
    []
  );

  return (
    <>
      <header
        styleName={"header" + (menuShown ? " menu-shown" : "")}
        onClick={(e) => {
          if (!menuShown) return;
          setMenuShown(false);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div styleName="wrapper">
          <div styleName="home">
            <Link route={{ id: "home", params: {} }}>
              <h1>
                <span>{"handshake\nnetwork"}</span>
              </h1>
            </Link>
          </div>
          <div
            styleName="menu-show"
            onClick={(e) => {
              setMenuShown(true);
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <h1>
              <span>{"handshake\nnetwork"}</span>
            </h1>
          </div>
          <nav styleName="menu">
            <Link route={{ id: "blocks", params: { page: 0 } }}>Blocks</Link>
            <Link route={{ id: "mempool", params: { page: 0 } }}>Mempool</Link>
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
          </nav>
        </div>
      </header>
      <main styleName="main">
        <div styleName="wrapper">
          {route === undefined ? (
            <NotFound />
          ) : (
            (route.id === "home" && <Blocks {...{ page: 0 }} />) ||
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
          <div styleName="copyright">
            {" "}
            &copy; 2021{" "}
            <div styleName="contactUs">
              <a href="https://t.me/hnsnetwork">Contact us</a>{" "}
            </div>
            <div styleName="version">Version 0.1.1</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default App;
