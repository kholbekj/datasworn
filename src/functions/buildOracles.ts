

import type fs from "fs";
import getSubdirs from "./io/getSubdirs.js";
import getYamlFiles from "./io/getYamlFiles.js";
import badJsonError from "./logging/badJsonError.js";
import buildLog from "./logging/buildLog.js";
import templateOracle from "./object-transform/templateOracle.js";
import { refsPath } from "./process-yaml/concatWithYamlRefs.js";
import type { IOracleCatRoot } from "./process-yaml/loadOracleData.js";
import loadOracleData from "./process-yaml/loadOracleData.js";
import OracleCategory from "../types/oracles/classes/OracleCategory.js";
import type IOracleCategoryYaml from "../types/oracles/interfaces/yaml/IOracleCategoryYaml.js";
import type { OracleCategoryName } from "../types/oracles/OracleCategoryId.js";
import type { OracleSubcategoryName } from "../types/oracles/OracleSubcategoryId.js";

interface IOracleSubcategoryData extends IOracleCategoryYaml {
  Name: OracleSubcategoryName;
  _childOf: OracleCategoryName;
}
interface IOracleParentCategoryData extends IOracleCategoryYaml {
  Name: OracleCategoryName;
  _parentOf: OracleSubcategoryName[];
}

interface IOracleParentCatRoot extends IOracleCatRoot {
  Categories: IOracleParentCategoryData[];
}

interface IOracleSubcatRoot extends IOracleCatRoot {
  Categories: IOracleSubcategoryData[];
}

export default function buildOracles(): OracleCategory[] {
  buildLog(buildOracles, "Building oracles...");
  const filesOracleCategories: fs.PathLike[] = getYamlFiles("oracles");
  // console.info(filesOracleCategories);

  const dirsOracleSubcategories: fs.PathLike[] = getSubdirs("oracles");
  const categoryRoot: IOracleParentCatRoot = loadOracleData(refsPath, ...filesOracleCategories) as IOracleParentCatRoot;

  const categories = categoryRoot.Categories;

  const filesOracleSubcategories: fs.PathLike[] = dirsOracleSubcategories.map(dir => getYamlFiles("", dir)).flat(1);

  const subcatRoot: IOracleSubcatRoot = loadOracleData(refsPath, ...filesOracleSubcategories) as IOracleSubcatRoot;

  const subcategories = subcatRoot.Categories.map((subcatData) => {
    if (subcatData._templateCategory) {
      // console.log("Building with template vars", subcatData);
      subcatData = templateOracle<IOracleSubcategoryData>(subcatData, subcatData._templateCategory);
      delete subcatData._templateVars;
      delete subcatData._templateCategory;
      // console.log("resulting object:", subcatData);
    }
    return subcatData;
  });

  subcategories.forEach(subcat => {
    const parentName = subcat._childOf;
    if (!parentName) {
      throw badJsonError(buildOracles, undefined, `"${subcat.Name}" is not assigned to a subcategory.`);
    }
    const parentCat = categories.find(cat => cat.Name === parentName) as IOracleCategoryYaml;

    if (parentCat._parentOf) {
      if (!parentCat._parentOf.includes(subcat.Name)) {
        throw badJsonError(buildOracles, undefined, `"${subcat.Name}" assigns itself to this category, but the category doesn't list this subcategory by name.`);
      }
      if (!parentCat.Categories) {
        parentCat.Categories = [];
      }
      buildLog(buildOracles, `Assigning "${subcat.Name}" as subcategory of ${parentCat.Name}`);
      parentCat.Categories.push(subcat);
    }
  });
  const json: OracleCategory[] = categories.map(categoryData => new OracleCategory(categoryData));

  const catCount = categories.length;
  const subcatCount = subcategories.length;

  // buildLog(buildOracles, `Finished building ${catCount} oracle categories (plus ${subcatCount} subcategories) containing ${tableCount} tables.`);
  return json;
}

