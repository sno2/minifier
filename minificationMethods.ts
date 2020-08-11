export const minificationMethods = {
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
