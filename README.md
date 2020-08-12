# minifier

A simple [Deno](https://deno.land) Module to minify files and strings.

## Usage

Here is an example usage of the Minifier module:

```ts
import { Minifier } from "https://raw.githubusercontent.com/CodingCarter/minifier/master/mod.ts"

const minifier = new Minifier()

const testCSS = `
html {
    width: 100%;
    height: 100vh;
    font-family: monospace;
}
`

minifier.fromString(test, "text/css")
```

## Installation

This is a [Deno](https://deno.land/) module available to import direct from this repo and via the [Github mod.ts File](https://raw.githubusercontent.com/CodingCarter/minifier/master/mod.ts). We haven't added the module to the Deno Registry because we hope to wait until we reach a stable build.

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import Minifier straight into your project:

```ts
import { Minifier } from "https://raw.githubusercontent.com/CodingCarter/minifier/master/mod.ts"
```

## Docs

The `Minifier` class contains everything that there is that is needed with this module. Here is a list of the methods and how to use them:

#### `.string(str: string, mimeType: string): string`

The `string` method takes in two required paramaters that are both strings. The first string is to be the string that you wish to minify, and the second being the mime type of the string that you wish to minify. The method will then return the value of the given string parameter minified. Here are the mime types that are currently supported with the `string` method:

- text/css

- text/html

- application/json

#### `.file(filepath: string, mimeType: string): Promise<void>`

The asynchronous `file` method also takes in two required string parameters with the first being the path to the file and the second being the mime type of the file. The method will then minify that file using the minification method set for the given mime type. Here are the mime types that are currently supported with the `file` method:

- text/css

- text/html

## Dependencies

- None!
