import init, {
  source,
  minify as minifyRaw,
  minify_html as minifyHTMLRaw,
} from "./wasm.js";

await init(source);

/** A specific language type. */
export enum Language {
  HTML = "html",
  CSS = "css",
  JS = "js",
  JSON = "json",
}

/**
 * Minifies the given code of the given language type.
 * @param language the language that is to be minified
 * @param code the code to minify
 * @returns the minified code
 */
export function minify<T extends Language | Lowercase<keyof typeof Language>>(
  language: T,
  code: string
) {
  return minifyRaw(language, code);
}

/** The options for how you want to minify the given html code. */
export interface MinifyHTMLOptions {
  minifyCSS: boolean;
  minifyJS: boolean;
}

/**
 * Minifies the given html code with the options that specify if you want to minify CSS and/or JS.
 * @param code the html code string to minify
 * @param options_ the options that tell if you want to minify CSS and/or JS in the HTML
 */
export function minifyHTML(
  code: string,
  options_?: Partial<MinifyHTMLOptions>
) {
  const { minifyCSS, minifyJS }: MinifyHTMLOptions = {
    minifyCSS: false,
    minifyJS: false,
    ...options_,
  };

  return minifyHTMLRaw(code, minifyCSS, minifyJS);
}
