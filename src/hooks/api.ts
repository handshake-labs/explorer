import { Routes } from "../types";
import { useFetch } from "./fetch";

export const useAPI = <K extends keyof Routes>(
  k: K,
  params: Routes[K]["params"]
): Routes[K]["result"] | null => {
  const search = new URLSearchParams(<any>params).toString();
  const path = `${k}${search.length ? `?${search}` : ""}`;

 return  useFetch(path);
};
