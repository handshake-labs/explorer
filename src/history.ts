import { Location } from "./route";

const listeners: ((() => void) | null)[] = [];

const notify = () => {
  for (const listener of listeners)
    if (listener) {
      listener();
    }
};

export const location = (): Location => ({
  pathname: document.location.pathname,
  search: document.location.search,
});

export const listen = (listener: () => void): (() => void) => {
  const n = listeners.push(listener) - 1;
  return () => (listeners[n] = null);
};

export const push = (path: string) => {
  history.pushState(null, "", path);
  notify();
};

export const replace = (path: string) => {
  history.replaceState(null, "", path);
  notify();
};

window.addEventListener("popstate", notify);
