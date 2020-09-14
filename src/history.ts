import { Route, parseLocation, buildPath } from "./routes";

const listeners: ((() => void) | null)[] = [];

const notify = () => {
  for (const listener of listeners)
    if (listener) {
      listener();
    }
};

export const setPath = (path: string) => {
  history.pushState(null, "", path);
  notify();
};

export const replaceRoute = (route: Route) => {
  history.replaceState(null, "", buildPath(route));
  notify();
};

export const getRoute = () => parseLocation(document.location);

export const listen = (listener: () => void): (() => void) => {
  const n = listeners.push(listener) - 1;
  return () => (listeners[n] = null);
};

window.addEventListener("popstate", notify);
