

import { is } from "typescript-is";
import badJsonError from "../../../functions/logging/badJsonError.js";
import type IMultipleRolls from "../interfaces/IMultipleRolls.js";

/**
 * Represents "Roll twice" and "Roll three times" oracle results.
 *
 * @class MultipleRolls
 * @property {number} Amount The number of results to be generated from the oracle table.
 * @property {boolean} [Allow duplicates] In tabletop play, duplicate results are typically rerolled (p. XX). However, a handful of tables (such as Space Sighting) use multiple rolls to represent discrete objects (rather than features of a single game object), so duplicate results should be allowed.
 */
export default class MultipleRolls implements IMultipleRolls {
  Amount: number = 2;
  "Allow duplicates": boolean = false;
  "Make it worse": boolean = false;
  constructor(json: IMultipleRolls) {
    if (!is<IMultipleRolls>(json)) {
      throw badJsonError(this.constructor, json);
    }
    this.Amount = json.Amount;
    this["Allow duplicates"] = json["Allow duplicates"] ?? this["Allow duplicates"];
    this["Make it worse"] = json["Make it worse"] ?? this["Make it worse"];
  }
}
