import { view } from "./view"

export function defaultCommandDictionary(filepath: string) {
  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = "successfully loaded " + filepath;
  commandDictionary["view"] = view(filepath);
  commandDictionary["search"] = view(filepath).at(1);

  return commandDictionary;
}

export function updateDictionary(currentDictionary: { [key: string]: any }, newKey: string, newValue: any) {
    currentDictionary[newKey] = newValue;
}