# minifier

An awesome language minifier for Deno that is powered by WebAssembly!

## Usage

To start using minifier with Deno, just add an import to the top of your file and get all of the features that you want to use from there! Here is an example import:

```ts
import { Language, minify } from "https://deno.land/x/minifier/mod.ts";
```

> For simplicity, we will not be including the import statements in our code examples. Therefore, it is implicit that you can import what you need by adjusting the code above.

## Docs

### Language Object

To specify your language easier, you can use the `Language` object that is exported from the library. Here is an example of passing in your language into the `minify` function:

```ts
const code = `
html {
  margin: 0;
  padding: 0;
}`;

minify(Language.CSS, code);
```

### Minifying Code

To minify any given code, simply use the `minify` function and pass in the given language as your first argument and the code as the second. The language that you need to pass in can either be the `Language` variant discussed [later on](#supported-languages), or the actual lowercase string that is your language name. Here are two examples of us minifying some CSS code:

```ts
const code = `
html {
  margin: 0;
  padding: 0;
}`;

// both return the minifed CSS
minify(Language.CSS, code);
minify("css", code);
```

### Minifying HTML

**Note**: This feature is under development.

As us HTML programmers know, you can include CSS and JS inside of your HTML code. If you want to minify the CSS/JS in your HTML, the just use the `minifyHTML` function! You just pass in the code first and the options for whether you want to minify CSS and/or JS second. Here is an example:

```ts
const code = `
<html>
<head>
  <style>
    html {
      margin: 0;
      padding: 0;
    }
  </style>
  <script>
    const x = 23;
    if (x > 20) {
      x--;
    }
    console.log(x);
  </script>
</head>
</html>
`;

// returns the minified HTML code with the CSS and JS code properly minified, too
minifyHTML(code, {
  minifyCSS: true,
  minifyJS: true,
});
```

## Supported Languages

The following languages are supported for minification. You can either pass in the `Language` object variant into our various functions to specify your language or the actual string in parentheses to pick your language.

- HTML ("html")
- CSS ("css")
- JS ("js")
- JSON ("json")

## CLI

Minifier even has its own CLI that allows you quickly minify files in your terminal.

### Installation

To install the CLI for minifier, run the following command:

```sh
deno install --allow-read --allow-write --allow-hrtime \
  -n minifier https://deno.land/x/minifier/cli.ts
```

> We strongly suggest including the `--allow-hrtime` flag as it allows the performance benchmarks to be more accurate.

### Commands

| Command                             | Action                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| `<file-location> `                  | minifies the given file from the location specified                            |
| `<file-location> <output-location>` | minifies the given file from the file location and saves it as the output file |
| `-H`, `--help`                      | provides info on all of the commands available                                 |
| `-V`, `--version`                   | gives the version info for the CLI                                             |

## Building

To build the project, make sure that you have the Go compiler and Cargo installed. After that, you can just run the `deno run -A build.ts` to generate the corresponding files.

## License

See the [attached license](./LICENSE) for more info.
