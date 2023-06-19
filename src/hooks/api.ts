import { useState, useEffect } from "preact/hooks";

import { API } from "api";

type Actions = keyof API;
type Params<A extends Actions> = API[A]["params"];
type Result<A extends Actions> = API[A]["result"] | null;

export const useAPI = <A extends Actions>(
  action: A,
  params: Params<A>
): Result<A> | undefined => {
  const search: string[] = [];
  for (const k in params) {
    const v = (<any>params[k]).toString();
    search.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
  }
  const path = `${action}?${search.join("&")}`;

  const [state, setState] = useState<Result<A> | undefined>(undefined);

  useEffect(() => {
    setState(undefined);
    let aborted = false;
    const url = API_ORIGIN + path;
    const fetchState = () => {
      if (!aborted)
        fetch(url)
          .then((response) => response.json())
          .then((data) => aborted || setState(data))
          .catch(() => aborted || setTimeout(fetchState, 3000));
    };
    fetchState();
    return () => {
      aborted = true;
    };
  }, [path]);

  return state;
};
