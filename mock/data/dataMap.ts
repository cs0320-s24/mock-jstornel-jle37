import { exampleHouses } from "./mockedJson";
import { exampleNeighborhoods } from "./mockedJson";
import { malformedCSV } from "./mockedJson";
import { csvNotFound } from "./mockedJson";

export const dataMap = new Map<string, (string | number | boolean)[][]>([
    ["data/exampleHouses.csv", exampleHouses],
    ["data/exampleNeighborhoods.csv", exampleNeighborhoods],
    ["data/malformedCSV.csv", malformedCSV],
  ]);

export function getMockedJson(filepath: string) {
  if (dataMap.has(filepath)) {
    return dataMap.get(filepath);
  }
  return csvNotFound;
}