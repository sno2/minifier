import { Minifier } from "./mod.ts"

const minifier = new Minifier()

const testHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minified Page</title>
</head>
<body>
    <h1>Hello, world! Do you like me now that I actually load fast?</h1>
</body>
</html>
`

console.log(minifier.fromString(testHTML, "text/html"))
