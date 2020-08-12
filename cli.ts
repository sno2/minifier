import { parse } from "https://deno.land/std@0.64.0/flags/mod.ts"
import { green, blue, bold } from "https://deno.land/std/fmt/colors.ts"
import { Minifier } from "./mod.ts"

// Gets arguments from Deno
const { _: args } = parse(Deno.args)

const minifier = new Minifier()

if (args.length == 0) {
  // Show info on Minifier CLI when just running `minifier`

  const minifierName = blue("minifier")

  console.log(`${green("Minifier CLI v0.1.0")}

 - ${minifierName}               Displays data on all Minifier CLI methods.

 - ${minifierName} ${bold("<file-path>")}   Minifies file from given file path.

 - ${minifierName} ${bold(
    "."
  )}             Minifies all files in current directory.

 - ${minifierName} ${bold(
    ".."
  )}            Minifies all files in current directory and subdirectories.
  `)
} else if (args[0] === ".") {
  // TODO: Minify all files within directory.
} else if (args[0] === "..") {
  // TODO: Minify all files within this directory and all subdirectories.
} else {
  // Minify file when running `minifier <file-path>`

  const filePath = <string>args[0]

  minifier.file(filePath).then(async () => {
    console.log(`✅ ${green("Minified")} ${args[0]}`)
  })
}
