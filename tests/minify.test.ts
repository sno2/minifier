import { Language, minify, minifyHTML } from "../mod.ts";
import { assertStrictEquals } from "https://deno.land/std@0.84.0/testing/asserts.ts";

type SamplePair = [string, string];

const samples: Record<Language, SamplePair[]> = {
  html: [["<h1 >     Hello,    world!</h1>", "<h1>Hello, world!</h1>"]],
  css: [
    [
      `html {
  color: red;
  background: blue;
  text-decoration: none;
}`,
      "html { color: red; background: blue; text-decoration: none; }",
    ],
  ],
  js: [["const x =     23   ;", "const x = 23 ;"]],
  json: [
    [
      JSON.stringify(
        {
          name: "carter",
          age: 0,
        },
        null,
        2
      ),
      '{"name":"carter","age":0}',
    ],
  ],
};

for (const lang in samples) {
  for (const sample of samples[lang as Language]) {
    const [input, toExpect] = sample;
    Deno.test(`Minifying ${lang.toUpperCase()}`, () => {
      const minified = minify(lang as Language, input);
      assertStrictEquals(minified, toExpect);
    });
  }
}
