import { dataMap } from "../../data/dataMap";

export function load(filepath: string) {
  if (dataMap.has(filepath)) {
    return "successfully loaded " + filepath;
  }
  return "invalid filepath - load fail";
}
