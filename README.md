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

minifier.string(testCSS, "text/css")
```

## Module Installation

This is a [Deno](https://deno.land/) module available to import direct from this repo and via the [Deno Third Party Modules index](https://deno.land/x/minifier).

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import Minifier straight into your project:

```ts
import { Minifier } from "https://deno.land/x/minifier/mod.ts"
```

## CLI

If you would like to install the CLI version of Minifier, just clone or download this repository and run the following command inside of your terminal:

```shell
deno install --unstable --allow-read --allow-write --name minifier cli.ts
```

Here are all of the commands that you can run and a short description:

| Command                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `minifier`             | Displays data on all Minifier CLI methods.                  |
| `minifier <file-path>` | Minifies file from given file path.                         |
| `minifier .`           | Minifies all files in current directory.                    |
| `minifier ..`          | Minifies all files in current directory and subdirectories. |

## Docs

The `Minifier` class contains everything that there is that is needed with this module. Here is a list of the methods and how to use them:

#### `.string(str: string, mimeType: string): string`

The `string` method takes in two required paramaters that are both strings. The first string is to be the string that you wish to minify, and the second being the mime type of the string that you wish to minify. The method will then return the value of the given string parameter minified. Here are the mime types that are currently supported with the `string` method:

#### `.file(filepath: string, mimeType: string): Promise<void>`

The asynchronous `file` method also takes in two required string parameters with the first being the path to the file and the second being the mime type of the file. The method will then minify that file using the minification method set for the given mime type. Here are the mime types that are currently supported with the `file` method:

### Supported Mime Types

- `text/html`

- `text/css`

- `application/json`

## Dependencies

- [Deno Flags Module (CLI Only - Parsing Command-Line Arguments)](https://deno.land/std@0.64.0/flags)

- [Printf for Deno Module (CLI Only - Terminal Colors)](https://deno.land/std@0.64.0/fmt)
