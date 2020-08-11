# minifier

A simple [Deno](https://deno.land) Module to minify files and strings.

Here is an example usage of the module:

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
