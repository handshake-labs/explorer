import { default as R, Location, HexParam, StrParam, UintParam } from "route";

const routes = {
  home: new R("/", {}, {}),
  blocks: new R("/blocks", {}, { page: UintParam }),
  block: new R("/blocks/:height", { height: UintParam }, { page: UintParam }),
  transaction: new R("/txs/:txid", { txid: HexParam }, {}),
  name: new R("/names/:name", { name: StrParam }, { bids_page: UintParam, records_page: UintParam }),
  search: new R("/search", {}, { query: StrParam }),
  mempool: new R("/mempool", {}, { page: UintParam }),
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
