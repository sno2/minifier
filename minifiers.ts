export const minifiers: { [key: string]: any } = {
  "text/css": (css: string): string =>
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

  "text/html": (html: string): string =>
    html.replace(/\s\s+/g, "").replace(/\n/g, "").trim(),

  // TODO: Better regex to remove whitespace for arrays and objects
  "application/json": (json: string): string =>
    json.replace(/\n/g, "").replace(/\s+"/g, '"'),
}
