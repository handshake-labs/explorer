import { default as R, Location, HexParam, StrParam, UintParam } from "route";

const routes = {
  home: new R("/", {}, {}),
  blocks: new R("/blocks", {}, { page: UintParam }),
  block: new R("/block/:hash", { hash: HexParam }, { page: UintParam }),
  blockByHeight: new R("/block/height/:height", { height: UintParam }, { page: UintParam }),
  transaction: new R("/tx/:txid", { txid: HexParam }, {}),
  name: new R("/name/:name", { name: StrParam }, { page: UintParam }),
  listExpensive: new R("/lists/expensive", {}, { page: UintParam }),
  search: new R("/search", {}, { query: StrParam }),
  mempool: new R("/mempool", {}, { limit: UintParam, offset: UintParam }),
  names: new R("/mempool", {}, { limit: UintParam, offset: UintParam }),
} as const;

export type Route = {
  [ID in keyof typeof routes]: typeof routes[ID] extends R<
    infer K,
    infer P,
    infer Q,
    infer R
  >
    ? { id: ID; params: R }
    : never;
}[keyof typeof routes];

export function parseLocation(location: Location): Route | undefined {
  for (const id in routes) {
    const params: any = (<any>routes)[id].parseLocation(location);
    if (params !== undefined) {
      return <any>{ id, params };
    }
  }
}
export function buildPath({ id, params }: Route): string {
  return routes[id].buildPath(<any>params);
}
