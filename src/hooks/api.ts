import { Requests, Responses } from "../types/api"
import { useHistoryState } from "./history"
import { useFetchData } from "./fetch"


export const useAPI = <K extends keyof (Requests & Responses)>(action: K, params: Requests[K]): Responses[K] => {
  const search = (new URLSearchParams(<any>params)).toString();
  const path = `/${action}${search.length ? `?${search}`: ""}`;

  const [state, setState] = useHistoryState<Responses[K]>()
  useFetchData(path, setState);
  return state;
};
