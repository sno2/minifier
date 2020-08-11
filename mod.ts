import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts"

const minificationMethods = {
  css: (css: string): string =>
    css
      .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, "")
      .replace(/\s*\{\s*/g, "{")
      .replace(/\s*\}\s*/g, "}")
      .replace(/\s*\:\s*/g, ":")
      .replace(/\s*\;\s*/g, ";")
      .replace(/\s*\,\s*/g, ",")
      .replace(/\s*\~\s*/g, "~")
      .replace(/\s*\>\s*/g, ">")
      .replace(/\s*\+\s*/g, "+")
      .replace(/\s*\!\s*/g, " !")
      .replace(/\s*\;\}\s*/g, "}"),

  html: (html: string): string =>
    html.replace(/\s\s+/g, "").trim().replace(/\n/g, ""),

  // TODO: Better regex to remove whitespace for arrays and objects
  json: (json: string): string => json.replace(/\n/g, "").replace(/\s+"/g, '"'),
}

export class Minifier {
  fromString = (str: string, mimeType: string): string => {
    switch (mimeType) {
      case "text/css":
        return minificationMethods.css(str)
      case "text/html":
        return minificationMethods.html(str)
      case "application/json":
        return minificationMethods.json(str)
      default:
        throw Error(`MIME Type ${mimeType} not allowed`)
    }
  }

  fromFile = async (filepath: string, mimeType: string) => {
    const file = await readFileStr(filepath)

    switch (mimeType) {
      case "text/css":
        writeFileStr(filepath, minificationMethods.css(file))
        return
      case "text/html":
        writeFileStr(filepath, minificationMethods.html(file))
        return
      default:
        throw Error(`MIME Type ${mimeType} not allowed`)
    }
  }
}
