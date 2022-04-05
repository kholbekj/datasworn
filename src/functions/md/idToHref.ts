import findById from "./findById.js";
import type IDisplay from "../../types/general/IDisplay.js";

/**
 * Converts an game item's ID string into a hyperlink-friendly relative URL.
 * @param {string} id - The id of the item you want to link to.
 * @param {unknown} data - The data to search through.
 * @returns A string that can be used as a URL.
 */
export default function idToHref(id: string, data: unknown) {
  const item = findById<{ Display?: IDisplay; }>(data, id);
  if (!item) {
    throw new Error(`Unable to find id: ${id}`);
  }
  let newId = id;
  if (item.Display) {
    const splitId = newId.split(" / ");
    newId = splitId.slice(0, -1).join("/") + "/" + item.Display.Title;
  }
  return newId
    .replaceAll(" ", "_");
}