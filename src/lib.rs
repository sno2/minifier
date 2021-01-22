use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn minify(language: String, code: String) -> String {
  match language.as_str() {
    "html" => minify_html(code, false, false),
    "css" => minify_html(code, true, false),
    "js" => minify_html(code, false, true),
    "json" => minify::json::minify(code.as_str()),
    _ => panic!(format!("{} is not a valid language.", language)),
  }
}

#[wasm_bindgen]
pub fn minify_html(code: String, minify_css: bool, minify_js: bool) -> String {
  String::from(
    std::str::from_utf8(
      minify_html::copy(
        code.as_bytes(),
        &minify_html::Cfg {
          minify_css,
          minify_js,
        },
      )
      .unwrap()
      .as_slice(),
    )
    .unwrap(),
  )
}
