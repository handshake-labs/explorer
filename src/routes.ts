import { default as createRoute, Route, IntParam, StrParam } from "typed-routes";

const home = createRoute().extend("");
const blocks = createRoute().extend("blocks");
const block = blocks.param("height", IntParam);
const transaction = block.extend("txs").param("txhash", StrParam);

const routes = { home, blocks, block, transaction } as const;
type IRouteMatch = {
  [K in keyof typeof routes]: {
    id: K;
    params: typeof routes[K] extends Route<infer U> ? U : never;
  };
};
type RouteMatch = IRouteMatch[keyof IRouteMatch];

export function matchPathname(pathname: string): RouteMatch | undefined {
  let id: keyof typeof routes;
  for (id in routes) {
    const params: any = routes[id].match(pathname);
    if (params !== undefined) {
      return { id, params };
    }
  }
}
export function buildPathname({ id, params }: RouteMatch): string {
  return routes[id].from(<any>params);
}
