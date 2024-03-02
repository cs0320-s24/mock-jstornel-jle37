import { view } from "./view";
import { load } from "./load";

/**
 * function that creates a bade dictionary of commands a user can call
 * @param filepath string containing a filepath to data
 * @param isVerbose boolean describing current output mode
 * @returns a dictionary of commands and their outputs
 */
export function defaultCommandDictionary(filepath: string, isVerbose: boolean) {
  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = load(filepath);
  commandDictionary["view"] = view(filepath);
  commandDictionary["search"] = view(filepath).at(1);
  commandDictionary["mode"] = (isVerbose) ? "Verbose Mode" : "Brief Mode";

  return commandDictionary;
}

/**
 * Updates the command dictionary, allows users to create more valid commands and outputs
 * @param currentDictionary current command dictionary
 * @param newKey new command to be added
 * @param newValue new output to match command
 */
export function updateDictionary(currentDictionary: { [key: string]: any }, newKey: string, newValue: any) {
    currentDictionary[newKey] = newValue;
}