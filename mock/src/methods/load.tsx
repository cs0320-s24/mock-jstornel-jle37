import { dataMap } from "../../data/dataMap";

/**
 * function that informs user if their file has been loaded
 * @param filepath filepath to be loaded
 * @returns a string describing load success or failure
 */
export function load(filepath: string) {
  if (dataMap.has(filepath)) {
    return "successfully loaded " + filepath;
  }
  return "invalid filepath - load failed";
}
