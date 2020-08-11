import { Minifier } from "./mod.ts"

const minifier = new Minifier()

const test = `
html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
}

body {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 2fr;
}
`

console.log(minifier.fromString(test, "text/css"))
