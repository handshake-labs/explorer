import { useState, useEffect } from "react";
import { State, Action } from "history";
import history from "history/browser";

export const useHistoryPathname = (): string => {
  const [pathname, setPathname] = useState(history.location.pathname);
  useEffect(
    () => history.listen(({ location }) => setPathname(location.pathname)),
    [],
  );
  return pathname;
};

export const useHistoryState = <S extends State>(): [S, (s: S)=>void] => {
  const [state, setState] = useState<S>(<S>(history.location.state || {}));
  useEffect(
    () => history.listen(
      ({ location, action }) =>
        action === Action.Replace || setState(<S>(location.state || {}))
    ),
    []
  );
  return [
    state,
    (s: S) => {
      history.replace(history.location.pathname, s)
    }
  ];
};
