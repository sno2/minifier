import { minify, Language } from "./mod.ts";
import {
  green,
  bold,
  red,
  blue,
} from "https://deno.land/std@0.84.0/fmt/colors.ts";

const { args } = Deno;
const [fileName, ...rest] = args;

function msg(emoji: string, message: string) {
  return `${emoji} ${message}`;
}

if (fileName !== undefined) {
  if (rest.length > 0) {
    throw Error("Too many arguments passed in.");
  }

  const fileContents = await Deno.readTextFile(fileName).catch((err) => {
    console.error(msg("❌", `Cannot find ${bold(red(fileName))}.`));
    Deno.exit(0);
  });
  const fileNameParts = fileName.split(".");
  const fileNameEnding = fileNameParts[fileNameParts.length - 1].toLowerCase();

  await Deno.writeTextFile(
    fileName,
    minify(fileNameEnding.toLowerCase() as Language, fileContents)
  );

  console.log(
    msg(
      "✅",
      `Successfully minified ${bold(green(fileName))}! (${blue(
        `${performance.now().toFixed(0)}ms`
      )})`
    )
  );
}
