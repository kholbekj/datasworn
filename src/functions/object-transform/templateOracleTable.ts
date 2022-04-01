import _ from "lodash-es";
import { is } from "typescript-is";
import extractRowContent from "./extractRowContent.js";
import extractRowRolls from "./extractRowRolls.js";
import type IRowYaml from "../../types/oracles/interfaces/yaml/IRowYaml.js";
import type ITemplateTable from "../../types/oracles/interfaces/yaml/ITemplateTableYaml.js";

export default function templateOracleTable(template: ITemplateTable): IRowYaml[] {
  if (template.rolls.length !== template.content.length) {
    throw new Error("[buildTemplateTable] Arrays for template content and rolls have different lengths. Use [null, null] to represent a null roll range.");
  }
  const templateClone = _.cloneDeep(template);
  const rolls = templateClone.rolls.map(row => extractRowRolls(row));
  const content = templateClone.content.map(row => {
    if (Array.isArray(row)) {
      return extractRowContent(row);
    }
    return [row];
  });
  const newTable = rolls.map((currentRoll, index) => {
    const newRow: IRowYaml = [ ...currentRoll, ...content[index] ] as IRowYaml;
    return newRow;
  });
  return newTable;
}
