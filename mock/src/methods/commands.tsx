import { view } from "./view";
import { load } from "./load";

export function defaultCommandDictionary(filepath: string, isVerbose: boolean) {
  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = load(filepath);
  commandDictionary["view"] = view(filepath);
  commandDictionary["search"] = view(filepath).at(1);
  commandDictionary["mode"] = (isVerbose) ? "Verbose Mode" : "Brief Mode";

  return commandDictionary;
}

export function updateDictionary(currentDictionary: { [key: string]: any }, newKey: string, newValue: any) {
    currentDictionary[newKey] = newValue;
}