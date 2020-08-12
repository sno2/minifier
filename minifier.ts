import { minifiers } from "./minifiers.ts"

// TODO: Better naming conventions for class methods (BREAKING CHANGE)

/**
 * The class that is used to minify strings and files based on given mime types
 * Requires the `--unstable` flag.
 */
export class Minifier {
  encoder = new TextEncoder()

  decoder = new TextDecoder("utf-8")

  /**
   * Checks to see if a Mime Type is supported
   * @param mimeType The string that is the Mime Type that is being checked to see if it is currently supported.
   */
  isAllowedMimeType = (mimeType: string): boolean =>
    Object.prototype.hasOwnProperty.call(minifiers, mimeType)

  /**
   * Minifies a string based upon a given mime type.
   * @param str The string that is the text that will be minified.
   * @param mimeType The string that is the Mime Type that is being checked to see if it is currently supported.
   */
  string = (str: string, mimeType: string): string => {
    if (!this.isAllowedMimeType(mimeType)) {
      throw Error(`Mime Type ${mimeType} not allowed`)
    }

    const minifier = minifiers[mimeType]

    return minifier(str)
  }

  /**
   * Writes a given file with a minified version of the original contents using a given mime type.
   * Requires the `--allow-read` and `--allow-write` flag.
   * @param filepath The string that is the filepath of the file that will be minified.
   * @param mimeType The string that is the Mime Type that is being checked to see if it is currently supported.
   * @async
   */
  file = async (filepath: string, mimeType: string): Promise<void> => {
    if (!this.isAllowedMimeType(mimeType)) {
      throw Error(`Mime Type ${mimeType} not allowed`)
    }

    const file = this.decoder.decode(await Deno.readFile(filepath))

    const minifier = minifiers[mimeType]

    Deno.writeFile(filepath, this.encoder.encode(minifier(file)))
  }
}
