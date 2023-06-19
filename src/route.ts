export interface ParamType<T> {
  default?: T;
  parse(s: string): T | undefined;
  stringify(t: T): string;
}

export const StrParam: ParamType<string> = {
  default: "",
  parse: (s) => s,
  stringify: (t) => t,
};

export const HexParam: ParamType<string> = {
  parse: (s) => (/^([0-9a-f]{2})+$/.test(s) ? s : undefined),
  stringify: (t) => t,
};

export const UintParam: ParamType<number> = {
  default: 0,
  parse: (s) => {
    const t = parseInt(s, 10);
    return t >= 0 ? t : undefined;
  },
  stringify: (t) => t.toString(),
};

export interface Location {
  pathname: string;
  search: string;
}

export default class Route<
  K extends string,
  P extends { [key: string]: ParamType<any> },
  Q extends { [key: string]: ParamType<any> },
  R = {
    [K in keyof (P & Q)]: (P & Q)[K] extends ParamType<infer T> ? T : never;
  }
> {
  private readonly pattern: string[];
  constructor(pattern: K, private readonly path: P, private readonly query: Q) {
    this.pattern = pattern.split("/");
    const patternKeys = new Set(
      this.pattern.filter((p) => p[0] === ":").map((p) => p.substr(1))
    );
    const queryKeys = new Set(Object.keys(query));
    for (const key of Object.keys(path)) {
      if (!patternKeys.delete(key)) {
        throw new Error(`param "${key}" is not used`);
      }
      if (queryKeys.has(key)) {
        throw new Error(`key "${key}" is used for both params and query`);
      }
    }
    if (patternKeys.size) {
      throw new Error(`param "${patternKeys.values().next()}" is undefined`);
    }
  }

  parseLocation({ pathname, search }: Location): R | undefined {
    const params: any = {};
    const pns = pathname.split("/");
    if (pns.length !== this.pattern.length) {
      return;
    }
    for (let i = 0; i < pns.length; i++) {
      const pn = pns[i];
      const p = this.pattern[i];
      if (p[0] !== ":") {
        if (pn === p) continue;
        return;
      }
      const key = p.substr(1);
      const value = this.path[key].parse(pn);
      if (value === undefined) return;
      params[key] = value;
    }
    for (const key in this.query) {
      const paramType = this.query[key];
      if (paramType.default !== undefined) params[key] = paramType.default;
    }
    const ss = search.substr(1).split("&");
    for (let i = 0; i < ss.length; i++) {
      const [k, v] = ss[i].split("=");
      if (v === undefined) continue;
      const key = decodeURIComponent(k);
      const value = this.query[key].parse(decodeURIComponent(v));
      if (value === undefined) return;
      params[key] = value;
    }
    if (
      Object.keys(params).length ===
      Object.keys(this.path).length + Object.keys(this.query).length
    ) {
      return params;
    }
  }

  buildPath(params: R): string {
    const pathname = this.pattern.slice();
    for (let i = 0; i < this.pattern.length; i++) {
      const p = this.pattern[i];
      if (p[0] === ":") {
        const key = p.substr(1);
        pathname[i] = this.path[key].stringify((<any>params)[key]);
      }
    }
    const search = [];
    for (const key in this.query) {
      const paramType = this.query[key];
      const value = (params as any)[key];
      if (value === paramType.default) continue;
      search.push(
        encodeURIComponent(key) +
          "=" +
          encodeURIComponent(paramType.stringify(value))
      );
    }
    if (search.length) {
      return pathname.join("/") + "?" + search.join("&");
    }
    return pathname.join("/");
  }
}
