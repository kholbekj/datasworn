

import yaml from "js-yaml";
import fs from "fs";
import loadYamlRefs from "./loadYamlRefs.js";
import buildTemplates from "./loadYamlTemplates.js";
import type IYamlWithRef from "../IYamlWithRef.js";
export const refsPath: fs.PathLike = "./src/data/oracles/_refs/";
export default function concatWithYamlRefs(referencePath: fs.PathLike = refsPath, ...filePaths: fs.PathLike[]) {
  const refFiles: fs.PathLike[] = fs.readdirSync(refsPath);
  const refString = loadYamlRefs(referencePath);
  const templateString = buildTemplates(referencePath.toString() + "/templates/");
  const fileStrings: string[] = filePaths.map(path => fs.readFileSync(path, { encoding: "utf-8" }));
  const dataStrings: string[] = [ refString, templateString, ...fileStrings ];
  const dataObject: IYamlWithRef = yaml.load(dataStrings.join("\n\n")) as IYamlWithRef;
  return dataObject;
}

