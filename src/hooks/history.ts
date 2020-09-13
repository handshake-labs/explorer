import { useState, useEffect } from "react";
import { State, Action, Listener } from "history";
import history from "history/browser";

const useListener = (listener: Listener) =>
  useEffect(() => history.listen(listener), []);

export const useHistoryPathname = (): string => {
  const [pathname, setPathname] = useState(() => history.location.pathname);

  useListener(({ location }) => {
    if (location.pathname === pathname) return;
    setPathname(location.pathname);
  });

  return pathname;
};

export const useHistorySearch = () => {
  const parse = (search: string) => {
    const params = new URLSearchParams(search);
    const record: Record<string, string[]> = {};
    for (const key of params.keys()) {
      record[key] = params.getAll(key);
    }
    return record;
  };

  const [search, setSearch] = useState(() => parse(history.location.search));
  const [rawSearch, setRawSearch] = useState<string | null>(null);
  useListener(({ location }) => {
    if (location.search === rawSearch) return;
    setSearch(parse(location.search));
    setRawSearch(location.search);
  });

  return search;
};

export const useHistoryState = <S extends Object>(
  key: string,
  initialState: S
) => {
  const get = (state: State): S => {
    const s = state && state.hasOwnProperty(key) && (<any>state)[key];
    return s === undefined ? initialState : s;
  };

  const [state, setState] = useState<S>(() => get(history.location.state));
  useListener(({ location, action }) => {
    if (action === Action.Replace) return;
    setState(get(location.state));
  });

  return [
    state,
    (state: S) => {
      const s = { ...history.location.state, key: state };
      setState(state);
      history.replace(history.location, s);
    },
  ];
};
