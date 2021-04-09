declare function moduleLib(options: Options): void

interface Options {
  [key: string]: any
}

declare namespace moduleLib {
  export const version: string;
  function doSomething(): void;
}

export = moduleLib