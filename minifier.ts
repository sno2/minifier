import { minificationMethods } from "./minificationMethods.ts"

export class Minifier {
  encoder = new TextEncoder()
  decoder = new TextDecoder("utf-8")

  // TODO: Better naming conventions for class methods (BREAKING CHANGE)
  string = (str: string, mimeType: string): string => {
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

  file = async (filepath: string, mimeType: string): Promise<void> => {
    const file = this.decoder.decode(await Deno.readFile(filepath))

    switch (mimeType) {
      case "text/css":
        await Deno.writeFile(
          filepath,
          this.encoder.encode(minificationMethods.css(file))
        )
        return
      case "text/html":
        await Deno.writeFile(
          filepath,
          this.encoder.encode(minificationMethods.html(file))
        )
        return
      default:
        throw Error(`MIME Type ${mimeType} not allowed`)
    }
  }
}
