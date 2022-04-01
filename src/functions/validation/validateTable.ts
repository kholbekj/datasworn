
import { is } from "typescript-is";
import type IRow from "../../types/oracles/interfaces/IRow.js";
import badJsonError from "../logging/badJsonError.js";

function validateTable(table: IRow[], requireUniqueResults = true, requireAlld100 = true,): boolean {
  if (!is<IRow[]>(table)) {
    throw badJsonError(validateTable, table, "Table is not an array of table rows.");
  }
  if (table.length < 2) {
    throw badJsonError(validateTable, table, "Table should have at least two rows.");
  }
  let totalRange = 0;
  const resultStrings: Set<string> = new Set();
  for (let i = 0; i < table.length; i++) {
    const floor = table[i].Floor;
    const ceiling = table[i].Ceiling;
    if (typeof floor === "number" && typeof ceiling === "number") {
      const lastCeiling = i > 0 ? table[i - 1].Ceiling : 1;

      const errPrefix = `[validateTable] Invalid row at index ${i}:`;
      // if (requireUniqueResults) { resultStrings.add(currentRow.Result); }
      if (i === 0 && floor !== 1) {
        throw new Error(`${errPrefix} first row must have a floor of 1\n${JSON.stringify(table, undefined, 2)}`);
      }
      if (i === (table.length - 1) && ceiling !== 100) {
        throw new Error(`${errPrefix} last row must have a ceiling of 100`);
      }
      if (floor > ceiling) {
        throw new Error(`${errPrefix} floor must be no greater than ceiling.`);
      }

      if (lastCeiling !== null && (lastCeiling + 1) !== (floor)) {
        throw new Error(`${errPrefix} current row's floor must be 1 higher than previous row's ceiling.`);
      }
      const rangeSize = (ceiling.valueOf() - floor.valueOf()) + 1;
      totalRange = totalRange + rangeSize;
    }
  }
  if (requireAlld100 && totalRange !== 100) {
    throw new Error("Invalid table - dice ranges do not sum to 100.");
  }
  if (requireUniqueResults && resultStrings.size !== table.length) {
    const duplicatedStrings = table.map(row => row.Result);
    const uniqueStrings = Array.from(resultStrings);

    uniqueStrings.forEach(row => {
      const indexToDelete = duplicatedStrings.findIndex((value) => value === row);
      if (indexToDelete > -1) {
        delete duplicatedStrings[indexToDelete];
      }
    });

    throw new Error(`Invalid table - duplicate Result strings.\n${JSON.stringify(uniqueStrings)}`,);
  }
  return true;
}

module.exports = validateTable;