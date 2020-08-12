import { minifiers } from "./minifiers.ts"

// TODO: Better naming conventions for class methods (BREAKING CHANGE).

/**
 * The class that is used to minify strings and files based on given mime types.
 * Requires the `--unstable` flag.
 */
export class Minifier {
  encoder = new TextEncoder()

  decoder = new TextDecoder("utf-8")

  /**
   * Gets the language of a file based upon the filepath.
   * @param filepath The string that is the filepath of the file that will be scanned for the file extension.
   */
  getLang = (filepath: string): string => {
    const re = /(?:\.([^.]+))?$/
    const extension = re.exec(filepath)

    if (extension && extension.length > 1) return extension[1]

    throw Error(`Invalid path for file: ${filepath}`)
  }

  /**
   * Checks to see if a language is supported.
   * @param lang The string that is the language that is being checked to see if it is currently supported.
   */
  isAllowedLang = (lang: string): boolean =>
    Object.prototype.hasOwnProperty.call(minifiers, lang)

  /**
   * Minifies and returns a string based upon a given mime type.
   * @param str The string that is the text that will be minified.
   * @param lang The string that is the language that is being checked to see if it is currently supported.
   */
  string = (str: string, lang: string): string => {
    if (!this.isAllowedLang(lang)) {
      throw Error(`${lang} not allowed`)
    }

    const minifier = minifiers[lang]

    return minifier(str)
  }

  /**
   * Writes a given file with a minified version of the original contents using a given mime type.
   * Requires the `--allow-read` and `--allow-write` flags.
   * @param filepath The string that is the filepath of the file that will be minified.
   * @param lang The unrequired string that is the language that is being checked to see if it is currently supported.
   * @async
   */
  file = async (filepath: string, lang?: string): Promise<void> => {
    if (lang === undefined) lang = this.getLang(filepath)

    if (!this.isAllowedLang(lang)) {
      throw Error(`${lang} not allowed`)
    }

    const file = this.decoder.decode(await Deno.readFile(filepath))

    const minifier = minifiers[lang]

    await Deno.writeFile(filepath, this.encoder.encode(minifier(file)))
  }
}
