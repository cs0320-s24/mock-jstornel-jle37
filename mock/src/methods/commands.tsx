import { view } from "./view"

export function defaultCommandDictionary(filepath: string, isVerbose: boolean) {
  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = "successfully loaded " + filepath;
  commandDictionary["view"] = view(filepath);
  commandDictionary["search"] = view(filepath).at(1);
  commandDictionary["mode"] = (isVerbose) ? "Verbose Mode" : "Brief Mode";

  return commandDictionary;
}

export function updateDictionary(currentDictionary: { [key: string]: any }, newKey: string, newValue: any) {
    currentDictionary[newKey] = newValue;
}