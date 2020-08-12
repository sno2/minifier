# minifier

A simple [Deno](https://deno.land) Module to minify files and strings.

## Usage

```ts
// Importing module

const minifier = new Minifier()

const testCSS = `
html {
    width: 100%;
    height: 100vh;
    font-family: monospace;
}

body {
    margin: 0;
}
`

minifier.fromString(test, "text/css") => `html{width:100%;height:100vh;font-family:monospace}body{margin:0}`
```

## Installation

This is a [Deno](https://deno.land/) module available to import direct from this repo and via the [Github mod.ts File](https://raw.githubusercontent.com/CodingCarter/minifier/master/mod.ts). We haven't added the module to the Deno Registry because we hope to wait until we reach a stable build.

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import Minifier straight into your project:

```ts
import { Minifier } from "https://raw.githubusercontent.com/CodingCarter/minifier/master/mod.ts"
```

## Dependencies

- None!
