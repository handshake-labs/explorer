import { API } from "../api";
import { useEffect, useState } from "react";

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

  const [state, setState] = useState<Result<A> | undefined>();

  useEffect(() => {
    let aborted = false;
    const url = API_ORIGIN + path;
    const fetchState = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (!aborted) setState(data);
    };
    fetchState();
    return () => {
      aborted = true;
    };
  }, [path]);

  return state;
};
