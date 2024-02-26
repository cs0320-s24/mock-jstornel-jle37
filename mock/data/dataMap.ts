import { exampleHouses } from "./mockedJson";
import { exampleNeighborhoods } from "./mockedJson";
import { malformedCSV } from "./mockedJson";

export const dataMap = new Map<string, (string | number | boolean)[][]>([
    ["data/exampleHouses.csv", exampleHouses],
    ["data/exampleNeighborhoods.csv", exampleNeighborhoods],
    ["data/malformedCSV.csv", malformedCSV],
  ]);

export function getMockedJson(filepath: string) {
    return dataMap.get(filepath);
}